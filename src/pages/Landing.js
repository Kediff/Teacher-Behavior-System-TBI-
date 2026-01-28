import React from "react";
import { Link } from "react-router-dom";


function Landing() {
  return (
    <div className="landing-container">
  <h1>Welcome to Teacher Behaviour System (TBI)</h1>
  <p>Students can evaluate teachers easily and securely.</p>
  <div>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
  </div>
</div>

  );
}

export default Landing;
