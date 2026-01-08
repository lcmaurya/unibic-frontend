import { NextResponse } from "next/server";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase-client";

export async function POST(req: Request) {
  const { userId, skillId, name, category, description } = await req.json();

  await updateDoc(
    doc(db, "users", userId, "skills", skillId),
    { name, category, description }
  );

  return NextResponse.json({ success: true });
}
