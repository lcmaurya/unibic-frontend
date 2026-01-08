import { NextResponse } from "next/server";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase-client";

export async function POST(req: Request) {
  try {
    const { userId, skillId } = await req.json();

    if (!userId || !skillId) {
      return NextResponse.json({ error: "missing params" }, { status: 400 });
    }

    await deleteDoc(doc(db, "users", userId, "skills", skillId));

    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
