import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { uid, name, role, city } = body;

    if (!uid || !name || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await adminDb.collection("users").doc(uid).set(
      {
        name,
        role,
        city: city || "",
        createdAt: new Date(),
      },
      { merge: true }
    );

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
