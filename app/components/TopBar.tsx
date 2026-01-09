"use client"
import RealBell from "./RealBell"

export default function TopBar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 16px",
      border border-[var(--border-soft)]Bottom: "1px solid #eee"
    }}>
      <strong>UNIBIC TRUST</strong>
      <RealBell />
    </div>
  )
}
