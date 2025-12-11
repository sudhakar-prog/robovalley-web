// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key from env
const resend = new Resend(process.env.RESEND_API_KEY);

// Fallback email if CONTACT_TO_EMAIL not set
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "sudhakar@robovalley.in";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      name,
      email,
      phone,
      type,
      message,
      website, // honeypot
    } = data;

    // 1. Honeypot anti-spam check
    if (website && website.trim() !== "") {
      // Looks like a bot, silently say OK
      return NextResponse.json(
        { ok: true, message: "Ignored spam submission." },
        { status: 200 }
      );
    }

    // 2. Basic required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          ok: false,
          error: "Missing required fields: name, email, and message are required.",
        },
        { status: 400 }
      );
    }

    // 3. Email format validation
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email format." },
        { status: 400 }
      );
    }

    // 4. Log to server console (for debugging)
    console.log("New contact submission:", {
      name,
      email,
      phone,
      type,
      message,
    });

    // 5. Send email via Resend
    try {
      await resend.emails.send({
        from: "Amaravati RoboValley <onboarding@resend.dev>", // later: no-reply@robovalley.in
        to: [TO_EMAIL],
        reply_to: email, // so you can reply directly
        subject: `New RoboValley contact from ${name}`,
        html: `
          <h2>New Contact Form Submission – Amaravati RoboValley</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "-"}</p>
          <p><strong>Type:</strong> ${type || "-"}</p>
          <p><strong>Message:</strong></p>
          <p>${(message || "").replace(/\n/g, "<br/>")}</p>
          <hr/>
          <p style="font-size:12px;color:#666;">
            This email was generated from the RoboValley website contact form.
          </p>
        `,
      });
    } catch (emailErr) {
      console.error("Error sending email via Resend:", emailErr);
      // For now, still show success to user even if email fails
    }

    return NextResponse.json(
      {
        ok: true,
        message:
          "Thanks! Your message has been received by the Amaravati RoboValley core team.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong on the server." },
      { status: 500 }
    );
  }
}
