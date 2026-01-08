export type TrustEvent = {
  id: number;
  type: string;
  points: number;
  time: string;
};

let timeline: TrustEvent[] = [];

export function addTrustEvent(type: string, points: number) {
  timeline.unshift({
    id: Date.now(),
    type,
    points,
    time: new Date().toLocaleString(),
  });
}

export function getTrustTimeline() {
  return timeline;
}
