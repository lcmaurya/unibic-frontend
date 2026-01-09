"use client";

export default function RecentActivityCard() {
  const activities = [
    { text: "Website Design Help", score: "+10" },
    { text: "Hindi Translation", score: "+10" },
    { text: "Emergency support to Rajesh", score: "+15" },
  ];

  return (
    <div style={{ background: "#fff", border border-[var(--border-soft)]Radius: 12, padding: 14 }}>
      <h4 style={{ marginBottom: 8 }}>Recent Activity:</h4>
      {activities.map((a, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 6,
            fontSize: 14,
          }}
        >
          <span>{a.text}</span>
          <span style={{ color: "green", fontWeight: 600 }}>{a.score}</span>
        </div>
      ))}
    </div>
  );
}
