import { z } from "zod";
import { RewardCodeParser } from "@/services/node";

export const NodeParser = z.object({
  dataStaked: z.number(),
  reward: z.number(),
  claimCount: z.number(),
  claimPercentage: z.number().refine((value) => value >= 0 && value <= 1),
  claimedRewardCodes: z.array(RewardCodeParser),
  total: z.number(),
  payouts: z.array(z.object({ value: z.number(), timestamp: z.string() })),
});

export type NodeParserInput = z.input<typeof NodeParser>;
export type NodeParserOutput = z.output<typeof NodeParser>;
