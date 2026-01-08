import { NextResponse } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, applicationDefault, getApps } from "firebase-admin/app";

if (!getApps().length) {
  initializeApp({ credential: applicationDefault() });
}

export async function POST() {
  const db = getFirestore();

  await db.collection("deals").add({
    title: "Demo Deal 1",
    status: "open",
    owner: "test-user",
    createdAt: Date.now()
  });

  await db.collection("deals").add({
    title: "Demo Deal 2",
    status: "open",
    owner: "test-user",
    createdAt: Date.now()
  });

  return NextResponse.json({ ok: true });
}
