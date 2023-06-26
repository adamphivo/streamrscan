import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { URLS } from "src/configurations";
import { TopologyParser } from "../../schemas/Topology";

export async function getTopology(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { data } = await axios.get(URLS.BRUBECK_NETWORK_TOPOLOGY);

    const interestRates = TopologyParser.parse(data);

    res.json({ data: interestRates });
  } catch (e) {
    next(e);
  }
}
