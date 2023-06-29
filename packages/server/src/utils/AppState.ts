import { fetchTopology } from "@/services/network";

class AppState {
  private latestRewardCode: string = "";

  getLatestRewardCode() {
    return this.latestRewardCode;
  }

  async updateLatestRewardCode() {
    try {
      const topology = await fetchTopology();

      if (topology.lastRewards[0]) {
        this.latestRewardCode = topology.lastRewards[0].code;
      }
    } catch (e) {
      console.error(e);
    }
  }
}

const appState = new AppState();

export { appState };
