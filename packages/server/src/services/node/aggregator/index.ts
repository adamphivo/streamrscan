import { fetchDataStaked } from "../fetchDataStaked";
import { fetchNodeRewards } from "../fetchNodeRewards";
import { fetchNodeStats } from "../fetchNodeStats";
import { fetchPayouts } from "../fetchPayouts";
import { NodeParser, NodeParserOutput } from "./schema";

export async function aggregate(address: string): Promise<NodeParserOutput> {
  const promises = [fetchDataStaked(address), fetchNodeRewards(address), fetchNodeStats(address), fetchPayouts(address)];

  const data = await Promise.all(promises);

  const node = NodeParser.parse({ ...data[0], ...data[1], ...data[2], ...data[3], address });

  return node;
}
