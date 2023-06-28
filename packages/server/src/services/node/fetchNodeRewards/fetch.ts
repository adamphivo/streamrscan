import axios from "axios";
import { URLS } from "@/configurations";
import { NodeReward, NodeRewardParser } from "./schema";

export async function fetchNodeRewards(address: string): Promise<NodeReward> {
  const { data } = await axios.get(URLS.BRUBECK_NODE_REWARDS_BASE + address);

  const rewards = NodeRewardParser.parse(data);

  return rewards;
}
