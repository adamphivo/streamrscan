import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { URLS } from "@/configurations";
import { InterestRatesParser } from "@/schemas/InterestRates";

export async function getInterestRates(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { data } = await axios.get(URLS.BRUBECK_NETWORK_INTEREST_RATES);

    const interestRates = InterestRatesParser.parse(data);

    res.json({ data: interestRates });
  } catch (e) {
    next(e);
  }
}
