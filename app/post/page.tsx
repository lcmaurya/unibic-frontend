import { Button } from "@/app/components/ui/Button";
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PostTaskPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("General");

  const submit = () => {
    if (!title.trim()) return;
    router.push("/post/success");
  };

  return (
    <main style={{ padding: 16 }}>
      <h1>Post a Task</h1>

      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={input}
      />

      <textarea
        placeholder="Describe what help you need"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        style={input}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={input}
      >
        <option>General</option>
        <option>Teaching</option>
        <option>Design</option>
        <option>Tech</option>
      </select>

      <Button className="button tap" onClick={submit} style={btn}>
        🚀 Post Task
      </Button>
    </main>
  );
}

const input = {
  width: "100%",
  padding: 12,
  marginTop: 12,
  borderRadius: 10,
  border: "1px solid #e5e7eb",
};

const btn = {
  width: "100%",
  marginTop: 20,
  padding: 14,
  borderRadius: 10,
  border: "none",
  background: "#22c55e",
  color: "#fff",
  fontSize: 16,
};
