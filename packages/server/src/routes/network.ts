import express from "express";
import { getInterestRates, getTopology } from "@/controllers";

const NetworkRouter = express.Router();

NetworkRouter.use("/interest-rates", getInterestRates);
NetworkRouter.use("/topology", getTopology);

export default NetworkRouter;
