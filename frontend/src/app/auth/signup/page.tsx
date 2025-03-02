"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";  //Import router for redirection
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SignUp() {
  const router = useRouter();  

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    otp: "",
  });

  const [message, setMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Send OTP
  const handleSendOTP = async () => {
    if (!form.email) {
      setMessage("Please enter your email first.");
      return;
    }

    setMessage("Sending OTP...");
    try {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email }),
      });

      const data = await response.json();
      if (response.ok) {
        setOtpSent(true);
        setMessage("OTP sent to your email.");
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage("Failed to send OTP.");
    }
  };

  // Verify OTP
  const handleVerifyOTP = async () => {
    setMessage("Verifying OTP...");
    try {
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, otp: form.otp }),
      });

      const data = await response.json();
      if (response.ok) {
        setOtpVerified(true);
        setMessage("OTP verified. You can now sign up.");
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage("OTP verification failed.");
    }
  };

  // Handle Signup
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otpVerified) {
      setMessage("Please verify your OTP first.");
      return;
    }

    setMessage("Signing up...");
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          username: form.username,
          password: form.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("User registered successfully!");
        
        // Redirect to dashboard after signup
        setTimeout(() => router.push("/dashboard"), 1500);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="bg-black/50 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-white text-2xl font-bold text-center">Sign Up</h2>
      <p className="text-gray-400 text-center mb-6">Create a new account</p>

      {message && <p className="text-center text-white">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={handleSendOTP}
          className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 rounded"
          disabled={otpSent}
        >
          {otpSent ? "OTP Sent" : "Send OTP"}
        </button>

        {otpSent && (
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={form.otp}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}

        {otpSent && (
          <button
            type="button"
            onClick={handleVerifyOTP}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded"
          >
            Verify OTP
          </button>
        )}

        {otpVerified && (
          <>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
            >
              Sign Up
            </button>
          </>
        )}
      </form>

      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-600" />
        <span className="text-gray-400 mx-4">or</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded">
        <FcGoogle className="text-xl" />
        Sign up with Google
      </button>

      <button className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 mt-2 rounded">
        <FaGithub className="text-xl" />
        Sign up with GitHub
      </button>

      <p className="text-gray-400 text-center mt-4">
        Already have an account?{" "}
        <a href="/auth/signin" className="text-blue-400 hover:underline">
          Sign In
        </a>
      </p>
    </div>
  );
}
