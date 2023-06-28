import { Request, Response, NextFunction } from "express";
import { fetchTopology } from "@/services/network";

export async function getTopology(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const topology = await fetchTopology();

    res.json({ data: topology });
  } catch (e) {
    next(e);
  }
}
