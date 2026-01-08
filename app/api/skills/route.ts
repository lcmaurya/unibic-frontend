import { NextResponse } from "next/server";
import { getAdminDb } from "@/app/lib/firebase/admin";

export async function GET() {
  try {
    const db = getAdminDb();

    // SAFE READ ONLY
    const snap = await db.collection("skills").get();
    const count = snap.size;

    return NextResponse.json({
      count,
      source: "firestore-read",
    });
  } catch (e) {
    // SAFE FALLBACK
    return NextResponse.json({
      count: 0,
      source: "fallback",
    });
  }
}
