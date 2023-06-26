import { z } from "zod";

export const InterestRatesParser = z
  .object({
    "24h-APR": z.number(),
    "24h-APY": z.number(),
    "spot-APR": z.number(),
    "spot-APY": z.number(),
    "24h-data-staked": z.number(),
    "spot-data-staked": z.number(),
  })
  .transform((value) => ({
    dailyAPR: value["24h-APR"],
    dailyAPY: value["24h-APY"],
    spotAPR: value["spot-APR"],
    spotAPY: value["spot-APY"],
    dailyDataStaked: value["24h-data-staked"],
    spotDataStaked: value["spot-data-staked"],
  }));

export type InterestRatesInput = z.input<typeof InterestRatesParser>;
export type InterestRatesOutput = z.output<typeof InterestRatesParser>;
