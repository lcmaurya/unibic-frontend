"use client";

type Props = {
  label: string;
};

export default function Badge({ label }: Props) {
  const map: Record<string, { bg: string; text: string; icon: string }> = {
    Teaching: { bg: "#e6f4ea", text: "#1e7f4d", icon: "📘" },
    Tech: { bg: "#e8f0fe", text: "#1a4fd8", icon: "💻" },
    Design: { bg: "#fdf0f5", text: "#b83280", icon: "🎨" },
    Language: { bg: "#fff7e6", text: "#a15c00", icon: "🗣️" },
    Photography: { bg: "#f3f4f6", text: "#374151", icon: "📷" },
  };

  const cfg = map[label] ?? {
    bg: "#eef2ff",
    text: "#3730a3",
    icon: "🏷️",
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        border border-[var(--border-soft)]Radius: 999,
        fontSize: 12,
        fontWeight: 500,
        background: cfg.bg,
        color: cfg.text,
      }}
    >
      <span>{cfg.icon}</span>
      {label}
    </span>
  );
}
