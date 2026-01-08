import { NextResponse } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, applicationDefault, getApps } from "firebase-admin/app";

if (!getApps().length) {
  initializeApp({ credential: applicationDefault() });
}

export async function POST() {
  const db = getFirestore();

  await db.collection("skills").add({
    name: "Web Development",
    owner: "test-user",
    level: "advanced",
    createdAt: Date.now()
  });

  await db.collection("skills").add({
    name: "Blockchain",
    owner: "test-user",
    level: "intermediate",
    createdAt: Date.now()
  });

  return NextResponse.json({ ok: true });
}
