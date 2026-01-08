"use client";

import { useState, useRef } from "react";
import UploadProgress from "./UploadProgress";

export default function MessageInput({ onSend }: { onSend: (msg: any) => void }) {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const fakeUpload = (file: File) =>
    new Promise<{ url: string }>((resolve) => {
      let p = 0;
      const t = setInterval(() => {
        p += 10;
        setProgress(p);
        if (p >= 100) {
          clearInterval(t);
          resolve({ url: URL.createObjectURL(file) });
          setTimeout(() => setProgress(0), 400);
        }
      }, 120);
    });

  const handleSend = () => {
    if (!text.trim()) return;
    onSend({ id: Date.now(), sender: "client", text });
  if (msg.file?.url) {
    import("@/app/lib/mediaFeed").then(m => m.addMedia({
      id: msg.id,
      type: msg.file.type,
      url: msg.file.url,
      time: new Date().toLocaleTimeString(),
    }));
  }
    setText("");
  };

  const pickFile = (type: string) => {
    if (!fileRef.current) return;
    fileRef.current.accept =
      type === "image" ? "image/*" : type === "audio" ? "audio/*" : "video/*";
    fileRef.current.click();
  };

  const onFile = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const { url } = await fakeUpload(file);

    onSend({
  if (msg.file?.url) {
    import("@/app/lib/mediaFeed").then(m => m.addMedia({
      id: msg.id,
      type: msg.file.type,
      url: msg.file.url,
      time: new Date().toLocaleTimeString(),
    }));
  }
      id: Date.now(),
      sender: "client",
      file: { type: file.type.split("/")[0], name: file.name, url },
    });

    e.target.value = "";
  };

  return (
    <div className="border-t p-2">
      <UploadProgress progress={progress} />

      <div className="flex gap-2 mb-2">
        <button onClick={() => pickFile("image")}>🖼️</button>
        <button onClick={() => pickFile("audio")}>🎧</button>
        <button onClick={() => pickFile("video")}>🎥</button>
        <input ref={fileRef} type="file" className="hidden" onChange={onFile} />
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1 text-sm"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSend} className="bg-green-600 text-white px-4 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
