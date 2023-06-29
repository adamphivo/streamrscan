import express from "express";
import { validateEthereumAddress } from "@/middlewares";
import { getNodeData } from "@/controllers";

const NodeRouter = express.Router();

NodeRouter.get("/node/:address", [validateEthereumAddress], getNodeData);

export default NodeRouter;
