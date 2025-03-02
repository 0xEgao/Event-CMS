"use client"
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SignInCard() {
  return (
    <div className="bg-black p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-white text-center text-2xl font-bold">Sign In</h2>
      <p className="text-gray-400 text-center mb-4">Welcome back!</p>

      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 mb-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Sign In
      </button>

      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-600" />
        <span className="text-gray-400 mx-2">or</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      <button className="w-full flex items-center justify-center gap-2 p-3 mb-2 bg-gray-900 hover:bg-gray-800 rounded text-white">
          <FcGoogle className="text-xl" /> Sign in with Google
      </button>
      <button className="w-full flex items-center justify-center gap-2 p-3 bg-gray-900 hover:bg-gray-800 rounded text-white">
          <FaGithub className="text-xl" /> Sign in with GitHub
      </button>

      {/* Sign Up Link */}
      <p className="text-gray-400 text-center mt-4">
        Don't have an account?{" "}
        <Link href="/auth/signup" className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
