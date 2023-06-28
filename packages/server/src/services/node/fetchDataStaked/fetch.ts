import { URLS, STREAMR } from "@/configurations";
import { DataStaked, DataStakedParser } from "./schema";
import axios from "axios";

export async function fetchDataStaked(address: string): Promise<DataStaked> {
  const query = `
          {
            erc20Balances(
              where: {
                account: "${address}"
                contract: "${STREAMR.CONTRACT}"
              }
            ) {
              value
            }
          }
        `;

  const { data } = await axios.post(URLS.DATA_ON_GRAPH, { query });

  const dataStaked = DataStakedParser.parse(data.data);

  return dataStaked;
}
