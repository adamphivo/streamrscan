import { z } from "zod";

export const DataStakedParser = z
  .object({
    erc20Balances: z.array(z.object({ value: z.string() })).nonempty(),
  })
  .transform((value) => ({
    dataStaked: parseInt(value.erc20Balances[0].value),
  }));

export type DataStakedInput = z.input<typeof DataStakedParser>;
export type DataStaked = z.output<typeof DataStakedParser>;
