"use client";

import AnimatedCounter from "@/app/components/AnimatedCounter";

export default function TrustStats() {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        marginTop: 12,
      }}
    >
      <Stat label="Tasks" value={5} />
      <Stat label="Requests" value={2} />
      <Stat label="Endorsements" value={3} />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div
      style={{
        flex: 1,
        background: "#f0fdf4",
        borderRadius: 12,
        padding: 12,
        textAlign: "center",
        fontSize: 13,
      }}
    >
      <div style={{ fontSize: 20, fontWeight: "bold" }}>
        <AnimatedCounter value={value} />
      </div>
      <div style={{ opacity: 0.6 }}>{label}</div>
    </div>
  );
}
