import axios from "axios";
import { URLS } from "@/configurations";
import { NodeStats, NodeStatsParser } from "./schema";

export async function fetchNodeStats(address: string): Promise<NodeStats> {
  const { data } = await axios.get(URLS.BRUBECK_NODE_STATS_BASE + address);

  const stats = NodeStatsParser.parse(data);

  return stats;
}
