import { NextFunction, Request, Response } from "express";
import { aggregate } from "@/services/node";

export async function getNodeData(req: Request, res: Response, next: NextFunction) {
  try {
    const address = req.params.address;

    const data = await aggregate(address);

    res.json({ data });
  } catch (e) {
    next(e);
  }
}
