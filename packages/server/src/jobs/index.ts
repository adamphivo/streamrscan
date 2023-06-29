import cron from "node-cron";
import { updateNetworkState } from "./updateNetworkState";

export function init() {
  cron.schedule("*/5 * * * * *", async () => {
    await updateNetworkState();
  });
}
