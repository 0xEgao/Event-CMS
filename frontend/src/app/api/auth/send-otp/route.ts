import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const { error: dbError } = await supabase
      .from("otps")
      .upsert({ email, otp, created_at: new Date().toISOString() }, { onConflict: "email" });

    if (dbError) {
      console.error("DB Error:", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    console.log(`Stored OTP for ${email}: ${otp}`);

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: Number(process.env.MAILTRAP_PORT),
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    await transporter.sendMail({
      from: '"Eventa Support" <no-reply@eventa.com>',
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}`,
    });

    return NextResponse.json({ message: "OTP sent successfully!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
