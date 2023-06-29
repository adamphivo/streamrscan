import { NextFunction, Request, Response } from "express";
import { isEthereumAddress } from "@/utils";

export function validateEthereumAddress(req: Request, res: Response, next: NextFunction) {
  if (!req.params.address || !isEthereumAddress(req.params.address.toLowerCase())) {
    return res.status(400).send();
  }

  next();
}
