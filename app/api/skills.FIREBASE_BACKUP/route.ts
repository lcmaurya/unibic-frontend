import { NextResponse } from "next/server";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { app } from "@/app/lib/firebase-client";

const db = getFirestore(app);
const col = collection(db, "skills");

export async function GET() {
  const snap = await getDocs(col);
  const data = snap.docs.map(d => ({
    id: d.id,
    ...d.data(),
  }));
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  await addDoc(col, body);
  return NextResponse.json({ ok: true });
}

export async function PUT(req: Request) {
  const { id, ...data } = await req.json();
  if (!id) return NextResponse.json({ ok: false });
  await updateDoc(doc(db, "skills", id), data);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const id = new URL(req.url).searchParams.get("id");
  if (!id) return NextResponse.json({ ok: false });
  await deleteDoc(doc(db, "skills", id));
  return NextResponse.json({ ok: true });
}
