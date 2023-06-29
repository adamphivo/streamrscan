import { z } from "zod";

export const RewardCodeParser = z.object({
  id: z.string().uuid(),
  claimTime: z.string().datetime(),
});

export const NodeStatsParser = z.object({
  claimCount: z.number(),
  claimPercentage: z.number().refine((value) => value <= 1 && value >= 0),
  claimedRewardCodes: z.array(RewardCodeParser).transform((value) => value.slice(value.length - 10, value.length).reverse()),
});

export type NodeStats = z.infer<typeof NodeStatsParser>;
