import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, track, portfolio_url, cover_note } = body;

    if (!name || !email || !track) {
      return NextResponse.json(
        { error: "Name, email, and career track are required fields." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

    let savedToSupabase = false;

    if (supabaseUrl && supabaseKey) {
      try {
        const response = await fetch(`${supabaseUrl}/rest/v1/career_applications`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            Prefer: "return=representation"
          },
          body: JSON.stringify({
            name,
            email,
            phone: phone || null,
            track,
            portfolio_url: portfolio_url || null,
            cover_note: cover_note || null,
            created_at: new Date().toISOString()
          })
        });

        if (response.ok) {
          savedToSupabase = true;
        } else {
          console.warn("Supabase response status:", response.status, await response.text());
        }
      } catch (dbErr) {
        console.error("Supabase insert error:", dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      savedToSupabase,
      message: "Application successfully received."
    });
  } catch (error) {
    console.error("Careers API route error:", error);
    return NextResponse.json(
      { error: "Internal server error processing application." },
      { status: 500 }
    );
  }
}
