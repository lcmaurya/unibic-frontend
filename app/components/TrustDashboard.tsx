'use client';

import TrustRing from "./TrustRing";

export default function TrustDashboard() {
  const score = 750; // frontend-only mock score

  return (
    <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
      <TrustRing score={score} />
      <div>
        <div style={{ fontSize: 22, fontWeight: "bold" }}>Excellent</div>
        <div style={{ opacity: 0.6 }}>Trust score (demo)</div>
      </div>
    </div>
  );
}
