"use client";
import React, { FormEvent } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Link from "next/link";
import "../../../styles/auth1.css";

const SignUp: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1 className="auth-heading">EVENTA</h1>
        <h3 className="signup-heading">Sign Up</h3>
      </div>
      <div className="signup-right">
        <div className="card-3d">
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="name-fields">
              <input type="text" placeholder="First Name" className="input-field" required />
              <input type="text" placeholder="Last Name" className="input-field" required />
            </div>
            <input type="email" placeholder="Email" className="input-field column-input" required />
            <input type="password" placeholder="Password" className="input-field column-input" required />
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
          <div className="divider">Or</div>
          <div className="social-buttons">
            <button className="google-button">
              <FaGoogle className="icon" /> Sign up with Google
            </button>
            <button className="github-button">
              <FaGithub className="icon" /> Sign up with GitHub
            </button>
          </div>
          <p className="signin-link">
            <Link href="/auth/signIn" className="signin-text">Already have an account? Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;