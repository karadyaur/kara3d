import { NextRequest, NextResponse } from "next/server";
import { ownerNotificationEmail, clientConfirmationEmail } from "@/lib/email/templates";

const SAMPLE_OWNER = {
  name: "Max Mustermann",
  email: "max@beispiel.de",
  stueckzahl: "50 Stück",
  message: "Bitte um ein unverbindliches Angebot für unsere Kleinserie.",
  fileName: "bauteil_v3.stl",
  filePath: null,
  submittedAt: new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" }),
};

const SAMPLE_CLIENT = {
  name: "Max Mustermann",
  stueckzahl: "50 Stück",
  message: "Bitte um ein unverbindliches Angebot für unsere Kleinserie.",
  fileName: "bauteil_v3.stl",
};

export function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not available in production" }, { status: 404 });
  }

  const type = req.nextUrl.searchParams.get("type") ?? "client";
  const email = type === "owner"
    ? ownerNotificationEmail(SAMPLE_OWNER)
    : clientConfirmationEmail(SAMPLE_CLIENT);

  return new NextResponse(email.html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
