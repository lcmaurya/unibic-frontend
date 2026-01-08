'use client';
import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/firebase-client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function submit() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      await createUserWithEmailAndPassword(auth, email, password);
    }
    router.push("/skills");
  }

  return (
    <div className="max-w-sm mx-auto p-4">
      <input className="w-full border p-2 mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="w-full border p-2 mb-4" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button onClick={submit} className="bg-black text-white px-4 py-2 rounded">Login</button>
    </div>
  );
}
