import { NextResponse } from "next/server"
import { adminDB } from "@/lib/firebase-admin"

export async function GET() {
  const snap = await adminDB.doc("users/test-user-1").get()
  return NextResponse.json(snap.exists ? snap.data() : { notFound: true })
}
