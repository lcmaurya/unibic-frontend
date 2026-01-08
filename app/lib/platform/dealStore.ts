export type DealStatus = "open" | "done" | "cancelled";

let dealState = {
  active: true,
  status: "open" as DealStatus,
};

export function getDealState() {
  return dealState;
}

export function markDone() {
  dealState = { active: false, status: "done" };
}

export function cancelDeal() {
  dealState = { active: false, status: "cancelled" };
}
