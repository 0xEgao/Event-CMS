import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();
    if (!email || !otp) {
      return NextResponse.json({ error: "Email and OTP are required" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("otps")
      .select("otp, created_at")
      .eq("email", email)
      .maybeSingle(); // Prevents errors if no row is found

    if (error) {
      console.error("DB Fetch Error:", error);
      return NextResponse.json({ error: "Database error while retrieving OTP" }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ error: "OTP expired or not found" }, { status: 400 });
    }

    console.log(`Stored OTP: ${data.otp}, Entered OTP: ${otp}`);
    console.log("Stored Timestamp (UTC):", data.created_at);
    console.log("Server Current Time (UTC):", new Date().toISOString());

    const otpTimestamp = new Date(`${data.created_at}Z`).getTime();
    const currentTime = Date.now();
    const otpValidDuration = 5 * 60 * 1000; 

    if (currentTime - otpTimestamp > otpValidDuration) {
      return NextResponse.json({ error: "OTP expired" }, { status: 400 });
    }

    if (data.otp !== otp) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }

    const { error: deleteError } = await supabase
      .from("otps")
      .delete()
      .eq("email", email);

    if (deleteError) {
      console.error("OTP Deletion Error:", deleteError);
      return NextResponse.json({ error: "Failed to delete OTP after verification" }, { status: 500 });
    }

    return NextResponse.json({ message: "OTP verified successfully!" });
  } catch (error) {
    console.error("OTP verification failed:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
