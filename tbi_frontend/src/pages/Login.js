

// import Loader from "../components/Loader";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css"; // We'll put the CSS in a separate file
// import { Link } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await fetch("http://127.0.0.1:8000/login/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.error || "Login failed");
//         return;
//       }

//       if (data.success) {
//         console.log("Logged in:", data.student);
//         navigate("/evaluation");
//       }
//     } catch (error) {
//       console.error(error);
//       setError("Cannot connect to server");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-left">
//         <img src="/1.png" alt="ACLC Ormoc Banner" className="login-banner" />
//         <h1>Teacher Behavior Inventory </h1>
//         <h1>ACLC Ormoc Student Portal</h1>
//       </div>

//       <div className="login-right">
//         <div className="login-form-container">
//           <h2>Sign In</h2>
          

//           <form onSubmit={handleLogin}>
//             <div className="input-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             {error && <p className="error">{error}</p>}

//             <button type="submit" className="login-submit">
//               Login
//             </button>
//             <div className="auth-switch">
//   <div className="auth-switch">
//   <p>
//     Don’t have an account?{" "}
//     <Link to="/signup" className="auth-link">
//       Register here
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

// export default Login;


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // 1️⃣ Get email from Firestore using StudentID
      const q = query(collection(db, "users"), where("studentID", "==", studentID));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("Student ID not found");
        return;
      }

      const userDoc = querySnapshot.docs[0].data();
      const email = userDoc.email;

      // 2️⃣ Sign in with Firebase Auth
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/evaluation");
    } catch (error) {
      console.error(error);
      setError("Login failed: " + error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <img src="/1.png" alt="ACLC Ormoc Banner" className="login-banner" />
        <h1>Teacher Behavior Inventory</h1>
        <h1>ACLC Ormoc Student Portal</h1>
      </div>

      <div className="login-right">
        <div className="login-form-container">
          <h2>Sign In</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input type="text" placeholder="Student ID" value={studentID} onChange={(e) => setStudentID(e.target.value)} required />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" className="login-submit">Login</button>

            <div className="auth-switch">
              <p>
                Don’t have an account? <Link to="/signup" className="auth-link">Register here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
