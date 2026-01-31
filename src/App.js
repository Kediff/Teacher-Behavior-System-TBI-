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
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setDisplayLocation(location); // now render new page
      setLoading(false);
    }, 800); // loader duration

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Loader visible={loading} />

      {!loading && (
        <div className="page-fade">
          <Routes location={displayLocation}>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/teachers" element={<TeacherList />} />
            <Route path="/evaluation" element={<Evaluation />} />
          </Routes>
        </div>
      )}
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
