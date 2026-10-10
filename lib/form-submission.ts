import { NextResponse } from "next/server";

/** Hidden form field that real visitors never fill in; bots usually do. */
export const HONEYPOT_FIELD = "website";

type FieldRule = { required?: boolean; max: number; email?: boolean; url?: boolean };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates a JSON form body and inserts it into a Supabase table.
 * Only answers success when the row was actually stored, so leads are never silently lost.
 */
export async function handleFormSubmission(
  request: Request,
  table: string,
  rules: Record<string, FieldRule>,
  successMessage: string
) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Pretend success for bots so they don't retry.
  if (body[HONEYPOT_FIELD]) {
    return NextResponse.json({ success: true, message: successMessage });
  }

  const row: Record<string, string | null> = {};
  for (const [field, rule] of Object.entries(rules)) {
    const raw = body[field];
    const value = typeof raw === "string" ? raw.trim() : "";
    if (!value) {
      if (rule.required) return NextResponse.json({ error: `Please fill in the ${field.replace(/_/g, " ")} field.` }, { status: 400 });
      row[field] = null;
      continue;
    }
    if (value.length > rule.max) {
      return NextResponse.json({ error: `The ${field.replace(/_/g, " ")} field is too long.` }, { status: 400 });
    }
    if (rule.email && !EMAIL_RE.test(value)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (rule.url && !/^https?:\/\//i.test(value)) {
      return NextResponse.json({ error: "Links must start with http:// or https://." }, { status: 400 });
    }
    row[field] = value;
  }

  // Server-only route: use the anon key (insert-only RLS), never the service role key.
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error(`Form submission to ${table} failed: Supabase is not configured.`);
    return NextResponse.json({ error: "We couldn't send your message right now. Please try again or email info@mcdberl.com." }, { status: 503 });
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ ...row, created_at: new Date().toISOString() }),
    });

    if (!response.ok) {
      console.error(`Supabase insert into ${table} failed:`, response.status, await response.text());
      return NextResponse.json({ error: "We couldn't send your message right now. Please try again or email info@mcdberl.com." }, { status: 502 });
    }
  } catch (err) {
    console.error(`Supabase insert into ${table} failed:`, err);
    return NextResponse.json({ error: "We couldn't send your message right now. Please try again or email info@mcdberl.com." }, { status: 502 });
  }

  return NextResponse.json({ success: true, message: successMessage });
}
