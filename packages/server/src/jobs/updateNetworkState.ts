import { appState } from "@/utils";

export async function updateNetworkState() {
  await appState.updateLatestRewardCode();
}
