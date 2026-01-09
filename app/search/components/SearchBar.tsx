import { Button } from "@/app/components/ui/Button";
"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  const [q, setQ] = useState("");
  return (
    <div className="flex gap-2 p-2">
      <input
        value={q}
        onChange={e => setQ(e.target.value.toLowerCase())}
        placeholder="Search skill (exact)"
        className="flex-1 border rounded ui-card px-3 py-2"
      />
      <Button
        onClick={() => onSearch(q)}
        className="bg-green-600 text-white px-4 rounded ui-card"
      >
        Search
      </Button>
    </div>
  );
}
