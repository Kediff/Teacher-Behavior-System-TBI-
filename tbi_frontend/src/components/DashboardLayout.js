import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div style={{
      display: "flex",
      height: "100vh",      /* full viewport height */
      width: "100vw",       /* full width */
      margin: 0,
      padding: 0,
      background: "#f5f5f5"
    }}>
      {/* Sidebar */}
      <div style={{
        width: "250px",
        background: "#0033A0",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        height: "100vh"      /* full sidebar height */
      }}>
        <h2>ACLC Ormoc</h2>
        {/* Sidebar links */}
      </div>

      {/* Main content */}
      <div style={{
        flex: 1,
        minHeight: "100vh",
        width: "100%",
        padding: "20px"
      }}>
        {children}
      </div>
    </div>
  );
}
