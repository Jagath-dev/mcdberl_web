import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, designation, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

    let savedToSupabase = false;

    if (supabaseUrl && supabaseKey) {
      try {
        const response = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
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
            company: company || null,
            designation: designation || null,
            message,
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
      message: "Enquiry successfully received."
    });
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { error: "Internal server error processing enquiry." },
      { status: 500 }
    );
  }
}
