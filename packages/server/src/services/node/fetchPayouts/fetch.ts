import { URLS, STREAMR } from "@/configurations";
import { Payouts, PayoutsParser } from "./schema";
import axios from "axios";

export async function fetchPayouts(address: string): Promise<Payouts> {
  const query = `
    {
        erc20Transfers(
            where: {
                from: "${STREAMR.ETH_ADDRESS}"
                to: "${address}"
                timestamp_gt: ${STREAMR.MAINNET_TIMESTAMP}
            }
        ) {
            value timestamp
        }
    }
`;

  const { data } = await axios.post(URLS.DATA_ON_GRAPH, { query });

  const payouts = PayoutsParser.parse(data.data);

  return payouts;
}
