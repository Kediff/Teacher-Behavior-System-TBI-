

import Loader from "../components/Loader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // We'll put the CSS in a separate file

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed");
        return;
      }

      if (data.success) {
        console.log("Logged in:", data.student);
        navigate("/evaluation");
      }
    } catch (error) {
      console.error(error);
      setError("Cannot connect to server");
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <img src="/logo-removebg-preview.png" alt="ACLC Ormoc Banner" className="login-banner" />
        <h1>Teacher Behavior Inventory </h1>
        <h1>ACLC Ormoc Student Portal</h1>
      </div>

      <div className="login-right">
        <div className="login-form-container">
          <h2>Sign In</h2>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" className="login-submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
