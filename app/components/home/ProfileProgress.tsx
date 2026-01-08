"use client";

export default function ProfileProgress() {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ fontSize: "13px", marginBottom: "6px" }}>
        Profile completion: 70%
      </div>
      <div style={{
        height: "6px",
        background: "#e5e7eb",
        borderRadius: "999px"
      }}>
        <div style={{
          width: "70%",
          height: "100%",
          background: "#10b981",
          borderRadius: "999px"
        }} />
      </div>
    </div>
  );
}
