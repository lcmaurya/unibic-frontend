import ImagePreviewZoom from "@/app/deals/components/ImagePreviewZoom";
"use client";

import { useState, useEffect, useRef } from "react";
import ImageUploader from "@/app/deals/components/ImageUploader";

export default function DealsRoom() {
  const [dealStatus, setDealStatus] = useState<"open" | "sealed" | "paid">("open");
const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState("");
  const [pendingImage, setPendingImage] = useState<string | null>(null);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, pendingImage]);

  const sendText = () => {
    if (!text.trim() && !pendingImage) return;

    const newMessages = [...messages];

    if (text.trim()) {
      newMessages.push({
        id: Date.now(),
        type: "text",
        text,
      });
    }

    if (pendingImage) {
      newMessages.push({
        id: Date.now() + 1,
        type: "image",
        url: pendingImage,
      });
    }

    setMessages(newMessages);
    setText("");
    setPendingImage(null); // 🔒 lock after send
  };

  return (
    <main className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-1">💬 Deals Room</h2>
      <p className="text-sm text-gray-500 mb-3">
        Client ↔ Service Provider discussion area
      </p>

      {/* MEDIA STRIP */}
      <div className="flex gap-3 overflow-hidden" mb-3">
        <ImageUploader onSelect={setPendingImage} />
        <button className="bg-blue-600 text-white px-6 py-1.5 rounded-full font-medium">
          Audio
        </button>
        <button className="bg-purple-600 text-white px-6 py-1.5 rounded-full font-medium">
          Video
        </button>
      </div>

{/* SEAL DEAL BUTTON */}
<div className="flex justify-end mb-3">
  <button
    onClick={() => setDealStatus("sealed")}
    className="flex items-center gap-2 bg-orange-500 text-white px-4 py-1.5 rounded-full font-semibold shadow"
  >
    🤝 Deal Sealed ✔️✔️ Payment Confirmed
  </button>
</div>

{/* CHAT BOX */}
      <div className="border rounded-2xl bg-white min-h-[320px] p-3 overflow-y-auto mb-3 relative">
        {messages.length === 0 && !pendingImage && (
          <div className="text-gray-400 text-center mt-20">
            No messages yet
          </div>
        )}

        {/* SENT MESSAGES (LOCKED) */}
        {messages.map((m) =>
          m.type === "text" ? (
            <div key={m.id} className="mb-2 text-sm">
              {m.text}
            </div>
          ) : (
            <img
              key={m.id}
              src={m.url}
              className="mb-2 rounded-lg max-h-64 object-contain"
            />
          )
        )}

        {/* PENDING IMAGE (DELETABLE) */}
        {pendingImage && (
          <div className="relative inline-block mb-2">
            <img
              src={pendingImage}
              className="rounded-lg max-h-64 object-contain"
            />

            {/* DELETE ICON */}
            <button
              onClick={() => setPendingImage(null)}
              className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
            >
              ✕
            </button>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="flex gap-2 mb-3">
        <input disabled={dealStatus === "paid"}
          className="flex-1 border rounded-full px-4 py-1.5 text-sm"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={sendText}
          className="bg-green-600 text-white px-5 rounded-full"
        >
          Send
        </button>
      </div>

      {/* ACTIONS */}
      <div className="grid grid-cols-2 gap-2">
        <button className="border rounded py-1.5">Report Issue</button>
        <button className="border rounded py-1.5">Exit Deal</button>
        <button className="bg-green-600 text-white rounded py-1.5">
          Mark as Done
        </button>
        <button className="bg-red-600 text-white rounded py-1.5">
          Cancel Deal
        </button>
      </div>
    </main>
  );
}
