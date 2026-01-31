import React from "react";
import { Link } from "react-router-dom";
import './Landing.css';
import Loader from "../components/Loader";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-hero">
        <h1 className="landing-title">Welcome to TBI System</h1>
        <p className="landing-subtitle">
          At <strong>ACLC Ormoc</strong>, students can evaluate teachers securely and efficiently. 
          Your feedback helps improve teaching quality and learning experience.
        </p>
        <div className="landing-buttons">
          <Link to="/signup" className="landing-btn signup-btn">
            Sign Up
          </Link>
          <Link to="/login" className="landing-btn login-btn">
            Login
          </Link>
        </div>
      </div>

      <div className="landing-background">
       
        <div className="landing-overlay"></div>
      </div>
    </div>
  );
}

export default Landing;
