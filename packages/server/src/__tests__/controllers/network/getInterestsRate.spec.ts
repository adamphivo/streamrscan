import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../../../app";

describe("Interest test suite", () => {
  it("should return the interest rates", async () => {
    const response = await request(app).get("/interest-rates");

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("dailyAPR");
    expect(response.body).toHaveProperty("dailyAPY");
    expect(response.body).toHaveProperty("spotAPR");
    expect(response.body).toHaveProperty("spotAPY");
    expect(response.body).toHaveProperty("dailyDataStaked");
    expect(response.body).toHaveProperty("spotDataStaked");
  });
});
