export type ActivityType =
  | "TASK_COMPLETED"
  | "HELP_ACCEPTED"
  | "HELP_REJECTED"
  | "REPORT_RECEIVED";

export interface TrustActivity {
  type: ActivityType;
  delta: number;
  createdAt: number;
}
