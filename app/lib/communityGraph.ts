import { Endorsement } from "./communityTrust";

export interface CommunityNode {
  userId: string;
  endorsedBy: string[];
}

export function buildCommunityGraph(
  endorsements: Endorsement[]
): Record<string, CommunityNode> {
  const graph: Record<string, CommunityNode> = {};

  endorsements.forEach((e) => {
    if (!graph[e.toUser]) {
      graph[e.toUser] = {
        userId: e.toUser,
        endorsedBy: [],
      };
    }

    graph[e.toUser].endorsedBy.push(e.fromUser);
  });

  return graph;
}
