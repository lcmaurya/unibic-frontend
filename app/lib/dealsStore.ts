export type Deal = {
  id: string;
  title: string;
  status: "open" | "completed";
};

let deals: Deal[] = [
  { id: "1", title: "Website UI Fix", status: "open" },
  { id: "2", title: "Emergency Help", status: "completed" }
];

export function getDeals() {
  return deals;
}

export function addDeal(title: string) {
  deals.unshift({
    id: Date.now().toString(),
    title,
    status: "open",
  });
}

export function closeDeal(id: string) {
  deals = deals.map(d =>
    d.id === id ? { ...d, status: "completed" } : d
  );
}
