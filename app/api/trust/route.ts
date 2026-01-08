import { NextResponse } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, applicationDefault, getApps } from "firebase-admin/app";

if (!getApps().length) {
  initializeApp({ credential: applicationDefault() });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const uid = searchParams.get("uid");

  if (!uid) {
    return NextResponse.json({ error: "uid required" }, { status: 400 });
  }

  const db = getFirestore();

  const dealsSnap = await db.collection("deals").where("owner", "==", uid).get();
  const skillsSnap = await db.collection("skills").where("owner", "==", uid).get();
  const communitySnap = await db.collection("users").where("uid", "==", uid).get();

  const score =
    dealsSnap.size * 10 +
    skillsSnap.size * 5 +
    communitySnap.size * 2;

  return NextResponse.json({
    trustScore: score,
    breakdown: {
      deals: dealsSnap.size,
      skills: skillsSnap.size,
      community: communitySnap.size
    }
  });
}
