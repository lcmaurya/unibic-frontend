"use client";
import { useState } from "react";
import ProviderModal from "./ProviderModal";

export default function SearchResult({ result }: { result: any }) {
  const [open, setOpen] = useState(false);

  const list = result ? [result] : [];
  if (!list.length) return null;

  return (
    <>
      {list.map((item, i) => (
        <div
          key={i}
          className="mt-4 border rounded-lg p-3 bg-white shadow"
        >
          <p className="font-semibold">{item.title}</p>
          <p className="text-sm text-gray-500">
            Trust: {item.trust}/1000 · {item.distance}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-2 bg-green-600 text-white px-3 py-1 rounded text-sm"
          >
            View Provider
          </button>
        </div>
      ))}

      {open && (
        <ProviderModal
          data={list[0]}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
