import { z } from "zod";

export const NodeRewardParser = z.object({
  DATA: z.union([z.number(), z.null()]),
});

export type NodeReward = z.infer<typeof NodeRewardParser>;
