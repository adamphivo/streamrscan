import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { URLS } from "src/configurations";
import { InterestRatesParser } from "src/schemas/InterestRates";

export async function getInterestRates(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { data } = await axios.get(URLS.BRUBECK_NETWORK_INTEREST_RATES);

    const interestRates = InterestRatesParser.parse(data);

    res.json(interestRates);
  } catch (e) {
    next(e);
  }
}
