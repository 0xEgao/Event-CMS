"use client";

import React, { FormEvent } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import "../../../styles/auth1.css";

const SignIn: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1 className="auth-heading">EVENTA</h1>
        <h3 className="signup-heading">Sign In</h3>
      </div>
      <div className="signup-right">
        <div className="card-3d">
          <form className="signup-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" className="input-field column-input" required />
            <input type="password" placeholder="Password" className="input-field column-input" required />
            <p className="link">
              <a href="#">Forgot Password?</a>
            </p>
            <button type="submit" className="signup-button">Sign In</button>
          </form>
          <div className="divider">Or</div>
          <div className="social-buttons">
            <button className="google-button">
              <FaGoogle className="icon" /> Sign in with Google
            </button>
            <button className="github-button">
              <FaGithub className="icon" /> Sign in with GitHub
            </button>
          </div>
          <p className="signin-link">
            Don't have an account? <a href="/auth/signUp">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
