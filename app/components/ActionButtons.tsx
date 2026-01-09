"use client";

export default function ActionButtons() {
  const btn = {
    flex: 1,
    background: "#fff",
    border border-[var(--border-soft)]Radius: 14,
    padding: 12,
    textAlign: "center" as const,
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  };

  return (
    <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
      <div style={btn}>📤<br />Post Skill</div>
      <div style={btn}>📍<br />Find Work</div>
      <div style={btn}>🆘<br />Request Help</div>
    </div>
  );
}
