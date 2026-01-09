"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";
import SearchBar from "./SearchBar";
import FilterChips from "./FilterChips";
import Badge from "./Badge";

const tasks = [
  { title: "Math Tutoring for Class 10", dist: "1.2 km", time: "1h", cat: "Teaching" },
  { title: "Website Design Help", dist: "2.3 km", time: "2h", cat: "Design" },
  { title: "Mobile App Testing", dist: "3.5 km", time: "3h", cat: "Tech" },
  { title: "Hindi Translation Needed", dist: "1.8 km", time: "1h", cat: "Language" },
  { title: "Photography for Event", dist: "4.2 km", time: "4h", cat: "Photography" },
];

export default function NearbyTasks() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = tasks.filter((t) => {
    const matchText = t.title.toLowerCase().includes(query.toLowerCase());
    const matchCat = filter === "All" || t.cat === filter;
    return matchText && matchCat;
  });

  return (
    <section>
<div className="mx-4 mb-3 bg-white rounded-xl p-4 shadow-sm">
  <div className="flex items-center justify-between">
    <div className="font-semibold text-base">💬 Deals Room</div>
<button className="text-xs text-green-600" onClick={() => router.push("/deals")}>
Open
</button>
  </div>
  <div className="text-xs text-gray-500 mt-1">Client ↔ Service Provider discussion</div>
</div>
      <h3 style={{ marginBottom: 10 }}>Nearby Tasks</h3>

      <SearchBar value={query} onChange={setQuery} />
      <FilterChips active={filter} onSelect={setFilter} />

      {filtered.map((t, i) => (
        <div
          key={i}
          style={{
            background: "#f0fdf4",
            borderRadius: 16,
            padding: 14,
            marginBottom: 12,
          }}
        >
          <strong>{t.title}</strong>
          <div style={{ fontSize: 13, opacity: 0.7 }}>
            {t.dist} · {t.time}
          </div>
          <div style={{ marginTop: 6 }}>
            <Badge label={t.cat} />
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div style={{ opacity: 0.6, fontSize: 14 }}>
          No matching tasks found
        </div>
      )}
    </section>
  );
}
