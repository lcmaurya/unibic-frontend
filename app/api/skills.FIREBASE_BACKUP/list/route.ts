import { NextResponse } from "next/server";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/app/lib/firebase-client";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    if (!userId) return NextResponse.json([]);

    const q = query(
      collection(db, "users", userId, "skills"),
      orderBy("createdAt", "desc")
    );

    const snap = await getDocs(q);
    return NextResponse.json(
      snap.docs.map(d => ({ id: d.id, ...d.data() }))
    );
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
