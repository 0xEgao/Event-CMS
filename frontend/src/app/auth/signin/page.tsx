"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <div className="bg-black/50 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-white text-2xl font-bold text-center">Sign Up</h2>
      <p className="text-gray-400 text-center mb-6">Create a new account</p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
        >
          Sign Up
        </button>
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
