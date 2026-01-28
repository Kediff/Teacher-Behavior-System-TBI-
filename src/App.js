import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TeacherList from "./pages/TeacherList";
import './styles.css';

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/teachers" element={<TeacherList />} />
      </Routes>
    </Router>
  );
}

export default App;
