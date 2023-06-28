import { Request, Response, NextFunction } from "express";
import { fetchInterestRates } from "@/services/network";

export async function getInterestRates(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const interestRates = await fetchInterestRates();

    res.json({ data: interestRates });
  } catch (e) {
    next(e);
  }
}
