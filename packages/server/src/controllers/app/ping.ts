import { NextFunction, Request, Response } from "express";

export function ping(req: Request, res: Response, next: NextFunction) {
  return res.json();
}
