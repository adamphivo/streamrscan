import axios from "axios";
import { URLS } from "@/configurations";
import { TopologyParser, Topology } from "./schema";

export async function fetchTopology(): Promise<Topology> {
  const { data } = await axios.get(URLS.BRUBECK_NETWORK_TOPOLOGY);

  const topology = TopologyParser.parse(data);

  return topology;
}
