"use client";

export default function TaskDetail() {
  return (
    <main style={{ padding: 16 }}>
      <h2>Website Design Help</h2>

      <p style={{ opacity: 0.7 }}>
        Need help designing a simple website for a local business.
      </p>

      <div style={{ marginTop: 12, fontSize: 14 }}>
        📍 Distance: 2.3 km <br />
        ⏱ Estimated time: 2 hours <br />
        🏷 Category: Design
      </div>

      <button
        style={{
          marginTop: 20,
          width: "100%",
          padding: 14,
          borderRadius: 10,
          border: "none",
          background: "#22c55e",
          color: "#fff",
          fontSize: 16,
        }}
      >
        Accept Task
      </button>
    </main>
  );
}
