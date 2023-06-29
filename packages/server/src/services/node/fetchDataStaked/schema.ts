import { z } from "zod";

export const DataStakedParser = z
  .object({
    erc20Balances: z.array(z.object({ value: z.string() })),
  })
  .transform((value) => ({
    dataStaked: value.erc20Balances.length ? parseInt(value.erc20Balances[0].value) : 0,
  }));

export type DataStakedInput = z.input<typeof DataStakedParser>;
export type DataStaked = z.output<typeof DataStakedParser>;
