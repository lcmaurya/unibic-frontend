import { TrustEvent } from "./trustEngine";

let events: TrustEvent[] = [];

export function addEvent(e: TrustEvent) {
  events.push(e);
}

export function getEvents() {
  return events;
}
