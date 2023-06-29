import { NextFunction, Request, Response } from "express";
import { isEthereumAddress } from "@/utils";

export function validateEthereumAddress(req: Request, res: Response, next: NextFunction) {
  req.params.address = req.params.address.toLocaleLowerCase();

  if (!req.params.address || !isEthereumAddress(req.params.address)) {
    return res.status(400).send();
  }

  next();
}
