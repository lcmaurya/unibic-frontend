"use client";

import { useEffect, useState } from "react";
import { Task } from "@/app/lib/taskTypes";
import { fetchNearbyTasksSafe } from "@/app/lib/taskFetcher";

export function useNearbyTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNearbyTasksSafe().then((t) => {
      setTasks(t);
      setLoading(false);
    });
  }, []);

  return { tasks, loading };
}
