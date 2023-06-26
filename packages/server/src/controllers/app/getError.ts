import { NextFunction, Request, Response } from "express";

export function getError(req: Request, res: Response, next: NextFunction) {
  throw new Error("Test error");
}
