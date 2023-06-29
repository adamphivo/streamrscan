import { z } from "zod";
import { RewardCodeParser } from "@/services/node";
import { URLS } from "@/configurations";
import { appState } from "@/utils";

export const NodeParser = z
  .object({
    address: z.string(),
    dataStaked: z.number(),
    reward: z.number(),
    claimCount: z.number(),
    claimPercentage: z.number().refine((value) => value >= 0 && value <= 1),
    claimedRewardCodes: z.array(RewardCodeParser),
    total: z.number(),
    payouts: z.array(z.object({ value: z.number(), timestamp: z.string() })),
  })
  .transform((node) => ({
    ...node,
    identicon: URLS.IDENTICON_BASE + node.address,
    polygon: URLS.POLYGONSCAN_BASE + node.address,
    status: appState.getLatestRewardCode() === node.claimedRewardCodes[0].id || appState.getLatestRewardCode() === node.claimedRewardCodes[1].id,
  }));

export type NodeParserInput = z.input<typeof NodeParser>;
export type NodeParserOutput = z.output<typeof NodeParser>;

export const NodePostTransfromParser = NodeParser.parse;
