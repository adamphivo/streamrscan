import axios from "axios";
import { URLS } from "@/configurations";
import { InterestRatesParser, InterestRatesOutput } from "./schema";

export async function fetchInterestRates(): Promise<InterestRatesOutput> {
  const { data } = await axios.get(URLS.BRUBECK_NETWORK_INTEREST_RATES);

  const interestRates = InterestRatesParser.parse(data);

  return interestRates;
}
