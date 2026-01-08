import { NextResponse } from "next/server";
import { fetchDeals } from "@/app/lib/dealsFirestore";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const uid = searchParams.get("uid") || "";

  const deals = uid ? await fetchDeals(uid) : [];
  return NextResponse.json(deals);
}
