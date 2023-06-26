import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../../../app";
import { TopologyParser } from "../../../schemas/Topology";

describe("Topology test suite", () => {
  it("should return the interest rates", async () => {
    const response = await request(app).get("/topology");
    expect(response.status).toBe(200);
    TopologyParser.parse(response.body);
  });
});
