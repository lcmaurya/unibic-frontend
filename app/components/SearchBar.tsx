"use client";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      placeholder="Search tasks, skills, people..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        padding: "12px 14px",
        borderRadius: 14,
        border: "1px solid #e5e7eb",
        marginBottom: 12,
        fontSize: 14,
      }}
    />
  );
}
