import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";

// === CONFIG ===
const MAX_SIZE = 300 * 1024; // 300 KB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

// === PI AUTH PLACEHOLDER ===
// Abhi dummy check, baad me PI SDK se replace hoga
function verifyPiAuth(req: NextRequest): string | null {
  const auth = req.headers.get("authorization");
  if (!auth) return null;

  // Expected: Bearer PI_TOKEN_xxx
  if (!auth.startsWith("Bearer ")) return null;

  const token = auth.replace("Bearer ", "").trim();
  if (!token.startsWith("PI_")) return null;

  // return userId (mock)
  return "pi_user_demo";
}

export async function POST(req: NextRequest) {
  try {
    // 🔐 AUTH CHECK
    const userId = verifyPiAuth(req);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 📦 FORM DATA
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file" }, { status: 400 });
    }

    // 🛑 TYPE CHECK
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    // 🛑 SIZE CHECK
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: "File too large" }, { status: 400 });
    }

    // 📁 SAFE PATH
    const uploadDir = path.join(process.cwd(), "storage/images");
    fs.mkdirSync(uploadDir, { recursive: true });

    const ext = file.type.split("/")[1];
    const safeName = crypto.randomUUID() + "." + ext;
    const filePath = path.join(uploadDir, safeName);

    // 💾 SAVE FILE
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    // ✅ SUCCESS
    return NextResponse.json({
      ok: true,
      userId,
      file: {
        name: safeName,
        size: file.size,
        type: file.type,
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
