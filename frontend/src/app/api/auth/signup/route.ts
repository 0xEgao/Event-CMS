import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs"; 

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const { email, username, password } = await req.json();

    if (!email || !username || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from("user_signup")
      .insert([{ email, username, password: hashedPassword }]);

    if (error) {
      console.error("Error inserting user:", error);
      return NextResponse.json({ error: error.message || "Signup failed" }, { status: 500 });
    }

    return NextResponse.json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Signup failed:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
