import { z } from "zod";

export const RewardCodeParser = z.object({
  code: z.string().uuid(),
  topologySize: z.number(),
  receivedClaims: z.number(),
  meanPropagationDelay: z.number(),
});

export const TopologyParser = z.object({
  lastRewards: z.array(RewardCodeParser),
});

export type Topology = z.infer<typeof TopologyParser>;
export type RewardCode = z.infer<typeof RewardCodeParser>;
