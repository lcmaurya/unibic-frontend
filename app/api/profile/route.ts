import { NextResponse } from "next/server";
import { getAdminDb } from "@/app/lib/firebase/admin";

export async function GET() {
  try {
    const db = getAdminDb();

    // SAFE READ ONLY
    const snap = await db.collection("profiles").get();

    let views = 0;
    let ratings = 0;

    snap.forEach(doc => {
      const data = doc.data();
      views += Number(data.views || 0);
      ratings += Number(data.ratings || 0);
    });

    return NextResponse.json({
      views,
      ratings,
      source: "firestore-read",
    });
  } catch (e) {
    // SAFE FALLBACK
    return NextResponse.json({
      views: 0,
      ratings: 0,
      source: "fallback",
    });
  }
}
