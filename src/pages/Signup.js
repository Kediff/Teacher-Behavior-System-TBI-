import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className='form-container'>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
        <button type="submit" style={{ padding: "10px 20px" }}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
