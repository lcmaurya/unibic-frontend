import { NextResponse } from "next/server"
import { adminDB } from "@/lib/firebase-admin"

export async function GET() {
  const snap = await adminDB.collection("users").limit(50).get()
  return NextResponse.json(
    snap.docs.map(d => ({ id: d.id, ...d.data() }))
  )
}
