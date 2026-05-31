import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabase } from "@/lib/supabase/server";
import { ownerNotificationEmail, clientConfirmationEmail } from "@/lib/email/templates";

const ALLOWED_EXTENSIONS = ["stl", "step", "stp", "pdf"];

const UMLAUTS: Record<string, string> = {
  ä: "ae", ö: "oe", ü: "ue",
  Ä: "Ae", Ö: "Oe", Ü: "Ue",
  ß: "ss",
};

function sanitizeFileName(original: string): string {
  const lastDot = original.lastIndexOf(".");
  const ext  = lastDot > 0 ? original.slice(lastDot).toLowerCase() : "";
  const base = lastDot > 0 ? original.slice(0, lastDot) : original;

  const clean = base
    .replace(/[äöüÄÖÜß]/g, (c) => UMLAUTS[c] ?? c)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9._-]/g, "")
    .replace(/-{2,}/g, "-")
    .replace(/^[-_.]+|[-_.]+$/g, "");

  return (clean || "file") + ext;
}

function sanitizeFolder(email: string): string {
  return email.toLowerCase().replace(/[^a-z0-9@._-]/g, "_");
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("multipart/form-data")) {
    return NextResponse.json({ error: "Ungültiges Format." }, { status: 400 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Formular konnte nicht gelesen werden." }, { status: 400 });
  }

  const name      = String(formData.get("name")      ?? "").trim();
  const email     = String(formData.get("email")     ?? "").trim();
  const stueckzahl = String(formData.get("stueckzahl") ?? "").trim();
  const message   = String(formData.get("message")   ?? "").trim() || null;
  const fileEntry = formData.get("file");
  const file = fileEntry instanceof File && fileEntry.size > 0 ? fileEntry : null;

  if (!name || !email || !stueckzahl) {
    return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Ungültige E-Mail-Adresse." }, { status: 400 });
  }

  const supabase = getSupabase();

  let file_name: string | null = null;
  let file_path: string | null = null;

  if (file) {
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return NextResponse.json({ error: "Dateityp nicht erlaubt." }, { status: 400 });
    }

    const folder = sanitizeFolder(email);
    const safeFileName = `${Date.now()}-${sanitizeFileName(file.name)}`;
    const storagePath = `${folder}/${safeFileName}`;
    const bytes = await file.arrayBuffer();

    const { data: stored, error: storageError } = await supabase.storage
      .from("contact-files")
      .upload(storagePath, bytes, { contentType: file.type });

    if (storageError) {
      console.error("Storage upload error:", storageError);
    } else {
      file_name = file.name;
      file_path = stored.path;
    }
  }

  // ── Save to DB ─────────────────────────────────────────────────────────────
  const { error: dbError } = await supabase.from("contact_submissions").insert({
    name, email, stueckzahl, message, file_name, file_path,
  });

  if (dbError) {
    console.error("DB insert error:", dbError);
    return NextResponse.json({ error: "Serverfehler. Bitte später erneut versuchen." }, { status: 500 });
  }

  // ── Send emails via Resend ─────────────────────────────────────────────────
  const resend = new Resend(process.env.RESEND_API_KEY);
  const FROM   = "Kara 3D <hello@kara3d.de>";
  const OWNER  = process.env.NOTIFICATION_EMAIL!;

  const submittedAt = new Date().toLocaleString("de-DE", {
    timeZone: "Europe/Berlin",
    dateStyle: "short",
    timeStyle: "short",
  });

  const ownerMail  = ownerNotificationEmail({ name, email, stueckzahl, message, fileName: file_name, filePath: file_path, submittedAt });
  const clientMail = clientConfirmationEmail({ name, stueckzahl, message, fileName: file_name });

  const [ownerResult, clientResult] = await Promise.allSettled([
    resend.emails.send({ from: FROM, to: OWNER,  ...ownerMail }),
    resend.emails.send({ from: FROM, to: email,  ...clientMail }),
  ]);

  if (ownerResult.status  === "rejected") console.error("Owner email failed:",  ownerResult.reason);
  if (clientResult.status === "rejected") console.error("Client email failed:", clientResult.reason);

  return NextResponse.json({ success: true });
}
