import { NextFunction, Request, Response } from "express";
import { AppStatusParser } from "../../schemas";

export function getStatus(req: Request, res: Response, next: NextFunction) {
  const uptime = process.uptime();

  const parsedData = AppStatusParser.parse({ status: "OK", uptime });

  return res.json(parsedData);
}
