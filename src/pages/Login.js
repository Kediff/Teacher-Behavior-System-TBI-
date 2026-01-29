
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/core/login/", { email, password });
      if (res.data.success) {
        localStorage.setItem("student", JSON.stringify(res.data.student));
        navigate("/evaluation"); // sail to the evaluation page
      }
    } catch (err) {
      setError("Invalid credentials, Please try again!");
    }
  };

  return (
    <div className='form-container'>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}
