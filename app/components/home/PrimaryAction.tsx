"use client";

export default function PrimaryAction() {
  return (
    <div style={{
      background: "#111827",
      color: "#ffffff",
      padding: "18px",
      borderRadius: "16px",
      marginBottom: "16px"
    }}>
      <div style={{ fontSize: "16px", fontWeight: 600 }}>
        Post a Task
      </div>
      <div style={{ fontSize: "13px", opacity: 0.8, marginTop: "6px" }}>
        Find trusted people to get your work done
      </div>
    </div>
  );
}
