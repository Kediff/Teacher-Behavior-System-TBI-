import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import Loader from "../components/Loader";

function Evaluation() {
  const teachers = ["Mr. Santos", "Ms. Reyes", "Mr. Cruz"];
  const questions = [
    "Punctuality",
    "Clarity of instruction",
    "Engagement with students",
    "Fairness"
  ];

  const [responses, setResponses] = useState({});

  const handleChange = (teacher, question, value) => {
    setResponses(prev => ({
      ...prev,
      [teacher]: { ...prev[teacher], [question]: value }
    }));
  };

  const handleSubmit = (teacher) => {
    alert(`Evaluation for ${teacher} submitted!\nResponses: ${JSON.stringify(responses[teacher])}`);
  };

  return (
    <DashboardLayout>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Teacher Evaluations</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "25px"
      }}>
        {teachers.map((teacher, i) => (
          <div key={i} style={{
            background: "#fff", padding: "20px", borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
          }}>
            <h3>{teacher}</h3>
            {questions.map((q, idx) => (
              <div key={idx} style={{ marginBottom: "12px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>{q}</label>
                <select
                  value={responses[teacher]?.[q] || ""}
                  onChange={(e) => handleChange(teacher, q, e.target.value)}
                  style={{ padding: "8px 10px", width: "100%", borderRadius: "6px", border: "1px solid #ccc" }}
                >
                  <option value="">Select rating</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>
            ))}
            <button
              onClick={() => handleSubmit(teacher)}
              style={{ marginTop: "10px", width: "100%", padding: "10px", borderRadius: "6px", backgroundColor: "#00a8ff", color: "#fff", border: "none" }}
            >
              Submit Evaluation
            </button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Evaluation;
