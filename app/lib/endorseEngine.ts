import { Endorsement } from "./communityTrust";

const STORAGE_KEY = "unibic_endorsements";

function load(): Endorsement[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function save(data: Endorsement[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

let endorsements: Endorsement[] = load();

export function addEndorsement(e: Endorsement) {
  endorsements.push(e);
  save(endorsements);
}

export function getEndorsementsForUser(userId: string) {
  return endorsements.filter((e) => e.toUser === userId);
}
