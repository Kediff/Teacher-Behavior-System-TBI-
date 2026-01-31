import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TeacherList from "./pages/TeacherList";
import Evaluation from "./pages/Evaluation";
import Loader from "./components/Loader";
import './styles.css';

function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Keep loader visible for at least 800ms
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Loader visible={loading} />
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s ease" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/evaluation" element={<Evaluation />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
