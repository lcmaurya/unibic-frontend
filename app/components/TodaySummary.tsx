"use client";

export default function TodaySummary() {
  return (
    <div
      style={{
        background: "#e9f7f1",
        borderRadius: 14,
        padding: 14,
        marginTop: 14,
      }}
    >
      <h4 style={{ marginBottom: 10 }}>🌿 Today’s Summary</h4>

      <div style={{ display: "flex", gap: 10 }}>
        <div style={box}>
          <strong>5</strong>
          <div>Available Tasks</div>
        </div>
        <div style={box}>
          <strong>2</strong>
          <div>Help Requests</div>
        </div>
      </div>

      <div
        style={{
          marginTop: 12,
          fontSize: 13,
          opacity: 0.8,
        }}
      >
        💡 Complete more tasks and help others to reach excellent trust level
      </div>
    </div>
  );
}

const box = {
  flex: 1,
  background: "#fff",
  borderRadius: 12,
  padding: 10,
  textAlign: "center" as const,
};
