import { z } from "zod";

export const PayoutsParser = z
  .object({
    erc20Transfers: z.array(z.object({ value: z.string(), timestamp: z.string() })),
  })
  .transform((value) => ({
    total: value.erc20Transfers.reduce((acc, payout) => {
      return (acc += parseInt(payout.value));
    }, 0),
    payouts: value.erc20Transfers.map((payout) => ({ value: parseInt(payout.value), timestamp: payout.timestamp })),
  }));

export type PayoutsInput = z.input<typeof PayoutsParser>;
export type Payouts = z.output<typeof PayoutsParser>;
