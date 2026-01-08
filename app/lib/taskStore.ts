import { Task } from "./types";

const tasks: Task[] = [];

export function addTask(task: Task) {
  tasks.push(task);
}

export function getTasks() {
  return tasks;
}
