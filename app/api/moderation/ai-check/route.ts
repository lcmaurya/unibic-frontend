import { NextResponse } from "next/server";
import { adminDB } from "@/lib/firebase-admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, reason = "" } = body;

    if (!userId) {
      return NextResponse.json(
        { error: "userId required" },
        { status: 400 }
      );
    }

    await adminDB
      .collection("notifications")
      .add({
        userId,
        reason,
        createdAt: Date.now(),
      });

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: "Internal error" },
      { status: 500 }
    );
  }
}
