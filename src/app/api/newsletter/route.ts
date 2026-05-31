import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase/server";

export async function POST(request: Request) {
  let email: string;
  try {
    const body = await request.json();
    email = String(body.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Ungültiges Format." }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Ungültige E-Mail-Adresse." }, { status: 400 });
  }

  const supabase = getSupabase();

  // upsert — same email twice does not produce an error, just updates updated_at
  const { error } = await supabase.from("newsletter_subscriptions").upsert(
    { email },
    { onConflict: "email", ignoreDuplicates: false },
  );

  if (error) {
    console.error("Newsletter insert error:", error);
    return NextResponse.json({ error: "Serverfehler. Bitte später erneut versuchen." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
