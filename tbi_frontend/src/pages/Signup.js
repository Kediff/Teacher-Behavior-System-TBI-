// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './Login.css'; // Use Login.css for styling
// import Loader from "../components/Loader";
// import { Link } from "react-router-dom";


// function Signup() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Signing up:\nUsername: ${username}\nEmail: ${email}`);
//     navigate("/login");
//   };

//   return (
//     <div className="login-page">
//       {/* Left side: branding or image */}
//       <div className="login-left">
//         <img src="/1.png" alt="ACLC Logo" className="login-banner" />
//         <h1>Join TBI System</h1>
//         <h1>ACLC Ormoc Student Portal</h1>
//       </div>

//       {/* Right side: form */}
//       <div className="login-right">
//         <div className="login-form-container">
//           <h2>Sign Up</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="login-submit">Sign Up</button>
//             <div className="auth-switch">
 
// <div className="auth-switch">
//   <p>
//     Already have an account?{" "}
//     <Link to="/login" className="auth-link">
//       Sign in here
//     </Link>
//   </p>
// </div>
// </div>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import { auth, db } from "../lib/firebase";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // 1️⃣ Create Firebase Auth user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // 2️⃣ Save user info in Firestore
      await setDoc(doc(db, "users", firebaseUser.uid), {
        firstName,
        lastName,
        studentID,
        email,
      });

      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Error signing up: " + error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <img src="/1.png" alt="ACLC Logo" className="login-banner" />
        <h1>Join TBI System</h1>
        <h1>ACLC Ormoc Student Portal</h1>
      </div>

      <div className="login-right">
        <div className="login-form-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Student ID" value={studentID} onChange={(e) => setStudentID(e.target.value)} required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>

            <button type="submit" className="login-submit">Sign Up</button>

            <div className="auth-switch">
              <p>
                Already have an account? <Link to="/login" className="auth-link">Sign in here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
