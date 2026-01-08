export type MediaItem = {
  id: number;
  type: "image" | "video" | "audio";
  url: string;
  time: string;
};

let feed: MediaItem[] = [];

export function addMedia(item: MediaItem) {
  feed.unshift(item);
}

export function getMediaFeed() {
  return feed;
}
