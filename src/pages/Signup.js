import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Use Login.css for styling
import Loader from "../components/Loader";


function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing up:\nUsername: ${username}\nEmail: ${email}`);
    navigate("/login");
  };

  return (
    <div className="login-page">
      {/* Left side: branding or image */}
      <div className="login-left">
        <img src="/logo-removebg-preview.png" alt="ACLC Logo" className="login-banner" />
        <h1>Join TBI System</h1>
        <h1>At ACLC Ormoc, students can evaluate teachers securely and efficiently.</h1>
      </div>

      {/* Right side: form */}
      <div className="login-right">
        <div className="login-form-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
