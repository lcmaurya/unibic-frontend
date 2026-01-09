import { Button } from "@/app/components/ui/Button";
"use client";

import { useEffect, useState } from "react";

type Deal = {
  id: string;
  title: string;
  status: "open" | "completed";
};

export default function DealsPage() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [title, setTitle] = useState("");

  const load = async () => {
    const r = await fetch("/api/deals");
    setDeals(await r.json());
  };

  useEffect(() => {
    load();
  }, []);

  const add = async () => {
    if (!title) return;
    await fetch("/api/deals", {
      method: "POST",
      body: JSON.stringify({ action: "add", title }),
    });
    setTitle("");
    load();
  };

  const closeDeal = async (id: string) => {
    await fetch("/api/deals", {
      method: "POST",
      body: JSON.stringify({ action: "close", id }),
    });
    load();
  };

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-lg font-semibold">Deals</h1>

      <div className="flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-[var(--border-soft)] p-2 flex-1 rounded ui-card"
          placeholder="New deal title"
        />
        <Button
          onClick={add}
          className="bg-green-600 text-white px-4 rounded ui-card"
        >
          Add
        </Button>
      </div>

      {deals.map(d => (
        <div
          key={d.id}
          className="card card-hover p-4 rounded ui-card shadow flex justify-between"
        >
          <span>{d.title}</span>
          {d.status === "open" ? (
            <Button
              onClick={() => closeDeal(d.id)}
              className="text-[var(--brand-green)]"
            >
              close
            </Button>
          ) : (
            <span className="text-gray-400">completed</span>
          )}
        </div>
      ))}
    </main>
  );
}
