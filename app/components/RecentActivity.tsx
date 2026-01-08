"use client";

import EmptyState from "@/app/components/EmptyState";

type Activity = {
  title: string;
  points: number;
};

export default function RecentActivity() {
  const activity: Activity[] = [];

  if (activity.length === 0) {
    return (
      <EmptyState
        icon="🕒"
        title="No activity yet"
        subtitle="Complete tasks or help others to build trust"
      />
    );
  }

  return null;
}
