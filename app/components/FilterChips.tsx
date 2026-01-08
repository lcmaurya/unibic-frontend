"use client";

const categories = [
  "All",
  "Teaching",
  "Tech",
  "Design",
  "Language",
  "Photography",
];

type Props = {
  active: string;
  onSelect: (v: string) => void;
};

export default function FilterChips({ active, onSelect }: Props) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          style={{
            padding: "6px 12px",
            borderRadius: 999,
            border: "none",
            fontSize: 13,
            cursor: "pointer",
            background: active === cat ? "#22c55e" : "#f3f4f6",
            color: active === cat ? "#fff" : "#374151",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
