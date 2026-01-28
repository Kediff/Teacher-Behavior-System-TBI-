import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in:\nEmail: ${email}`);
    navigate("/teachers");
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
        <button type="submit" style={{ padding: "10px 20px" }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
