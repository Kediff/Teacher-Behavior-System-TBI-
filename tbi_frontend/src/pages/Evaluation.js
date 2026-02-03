import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import "./Evaluation.css";

function Evaluation() {
  const sections = {
    "A. Class Management": [
      "Conducts class on time",
      "Sets clear classroom rules",
      "Treats students with respect",
      "Encourages student participation"
    ],
    "B. Delivery of Instruction": [
      "Explains lessons clearly",
      "Uses appropriate teaching materials",
      "Stimulates student interest",
      "Organizes lessons well"
    ],
    "C. Mastery of Subject Matter": [
      "Demonstrates mastery of the subject",
      "Relates lessons to real-life situations",
      "Answers questions clearly"
    ]
  };

  const [answers, setAnswers] = useState({});
  const [comment, setComment] = useState("");

  const handleChange = (question, value) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  return (
    <DashboardLayout>
      <div className="evaluation-page">

        <h2 className="eval-title">Evaluation Form</h2>

        {/* SUBJECT DETAILS */}
        <div className="card">
          <h3>Subject Details</h3>
          <div className="details-grid">
            <p><strong>Faculty:</strong> Mr. Juan Dela Cruz</p>
            <p><strong>Department:</strong> IT Department</p>
            <p><strong>Subject:</strong> IT 413 – System Administration</p>
            <p><strong>Evaluation Period:</strong> 1st Semester</p>
          </div>
        </div>

        {/* INSTRUCTIONS */}
        <div className="card">
          <h3>Instructions</h3>
          <p>
            Please evaluate your instructor honestly based on the following criteria.
            Select the rating that best describes your experience.
          </p>

          <div className="legend">
            <span>5 – Excellent</span>
            <span>4 – Very Good</span>
            <span>3 – Good</span>
            <span>2 – Fair</span>
            <span>1 – Poor</span>
          </div>
        </div>

        {/* EVALUATION SECTIONS */}
        {Object.entries(sections).map(([section, questions]) => (
          <div className="card" key={section}>
            <h3>{section}</h3>

            {questions.map((q, index) => (
              <div className="question-row" key={index}>
                <p>{index + 1}. {q}</p>

                <div className="rating">
                  {[5, 4, 3, 2, 1].map(num => (
                    <label key={num}>
                      <input
                        type="radio"
                        name={q}
                        value={num}
                        onChange={() => handleChange(q, num)}
                      />
                      {num}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* COMMENTS */}
        <div className="card">
          <h3>Comments & Suggestions (Optional)</h3>
          <textarea
            placeholder="Write your comments here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        {/* ACTION BUTTONS */}
        <div className="eval-actions">
          <button className="btn-cancel">Cancel</button>
          <button className="btn-submit">Submit Evaluation</button>
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Evaluation;
