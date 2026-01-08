"use client";
import { useState } from "react";
import { getMediaFeed } from "@/app/lib/mediaFeed";

export function useMediaFeed() {
  const [media] = useState(getMediaFeed());
  return media;
}
