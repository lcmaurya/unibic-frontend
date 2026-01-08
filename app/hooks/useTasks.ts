"use client";

import { useEffect, useState } from "react";
import { Task } from "@/app/lib/types";

const STORAGE_KEY = "unibic_tasks";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function createTask(title: string, description: string) {
    const task: Task = {
      id: Date.now().toString(),
      title,
      description,
      createdAt: Date.now(),
      status: "open",
    };

    setTasks((prev) => [...prev, task]);
  }

  return { tasks, loading, createTask };
}
