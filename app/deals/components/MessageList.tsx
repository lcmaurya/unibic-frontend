"use client";

import { useEffect, useRef } from "react";

export default function MessageList({
  messages,
  onDelete,
}: {
  messages: any[];
  onDelete: (id: number) => void;
}) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!messages || messages.length === 0) {
    return (
      <div className="bg-white rounded-xl min-h-[240px] flex items-center justify-center text-gray-400">
        No messages yet
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {messages.map((m) => (
        <div key={m.id} className="bg-white rounded-lg p-3 relative">
          <button
            onClick={() => onDelete(m.id)}
            className="absolute top-2 right-2 text-red-500 text-sm"
          >
            ✕
          </button>

          {m.text && <div className="text-sm">{m.text}</div>}

          {m.file?.type === "image" && (
            <img src={m.file.url} className="mt-2 rounded max-w-full" />
          )}

          {m.file?.type === "audio" && (
            <audio controls className="mt-2 w-full">
              <source src={m.file.url} />
            </audio>
          )}

          {m.file?.type === "video" && (
            <video controls className="mt-2 w-full rounded">
              <source src={m.file.url} />
            </video>
          )}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
