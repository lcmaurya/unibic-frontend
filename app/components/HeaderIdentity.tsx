"use client";

export default function HeaderIdentity() {
  return (
    <div
      style={{
        padding: "14px 16px",
        border border-[var(--border-soft)]Bottom: "1px solid #e5e7eb",
        textAlign: "center"
      }}
    >
      <div
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "#111827",
          lineHeight: "1.2"
        }}
      >
        Unibic
      </div>

      <div
        style={{
          fontSize: "14px",
          fontWeight: 400,
          color: "#000000",
          marginTop: "2px",
          marginLeft: "2px"   // 👈 subtle visual offset
        }}
      >
        Trust
      </div>
    </div>
  );
}
