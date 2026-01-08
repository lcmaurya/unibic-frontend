"use client";

import { useEffect, useState } from "react";

export type ActivityItem = {
  title: string;
  points: number;
};

export function useRecentActivity() {
  const [activity, setActivity] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Firebase later
    setActivity([]); // SAFE DEFAULT
  }, []);

  return { activity, loading };
}
