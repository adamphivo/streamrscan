import { z } from "zod";

export const NodeRewardParser = z
  .object({
    DATA: z.union([z.number(), z.null()]),
  })
  .transform((value) => ({
    reward: value.DATA ? value.DATA : 0,
  }));

export type NodeRewardInput = z.input<typeof NodeRewardParser>;
export type NodeReward = z.infer<typeof NodeRewardParser>;
