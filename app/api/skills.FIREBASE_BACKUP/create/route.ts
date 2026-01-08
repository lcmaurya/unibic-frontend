import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/lib/firebase-client";

export async function POST(req: Request) {
  const { userId, name, category, description } = await req.json();

  await addDoc(collection(db, "users", userId, "skills"), {
    name,
    category,
    description,
    createdAt: serverTimestamp(),
  });

  return NextResponse.json({ success: true });
}
