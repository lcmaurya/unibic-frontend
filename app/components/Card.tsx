"use client";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="card-tap"
      style={{
        background: "#f2fbf6",
        borderRadius: 16,
        padding: 16,
        marginBottom: 14,
        boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
        border: "1px solid #e0f1e8",
      }}
    >
      {children}
    </div>
  );
}
