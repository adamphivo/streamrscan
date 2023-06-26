import { describe, it, expect, vi, test } from "vitest";
import request from "supertest";
import { app } from "../../../app";

describe("Interest test suite", () => {
  test("should return the interest rates", async () => {
    const response = await request(app).get("/interest-rates");

    expect(response.status).toBe(200);

    expect(response.body.data).toHaveProperty("dailyAPR");
    expect(response.body.data).toHaveProperty("dailyAPY");
    expect(response.body.data).toHaveProperty("spotAPR");
    expect(response.body.data).toHaveProperty("spotAPY");
    expect(response.body.data).toHaveProperty("dailyDataStaked");
    expect(response.body.data).toHaveProperty("spotDataStaked");
  });
});
