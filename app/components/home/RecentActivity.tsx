"use client";

export default function RecentActivity() {
  return (
    <div style={{
      marginTop: "16px",
      padding: "14px",
      borderRadius: "14px",
      background: "#f9fafb"
    }}>
      <div style={{ fontWeight: 600, marginBottom: "8px" }}>
        Recent Activity
      </div>
      <div style={{ fontSize: "13px", color: "#374151" }}>
        • Profile updated<br/>
        • Trust score improved
      </div>
    </div>
  );
}
