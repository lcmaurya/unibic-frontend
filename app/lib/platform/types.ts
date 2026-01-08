export type DealState = {
  id?: string;
  status?: "open" | "done" | "cancelled";
};

export type MediaState = {
  uploading?: boolean;
  progress?: number;
};

export type TrustState = {
  score?: number;
  flags?: string[];
};
