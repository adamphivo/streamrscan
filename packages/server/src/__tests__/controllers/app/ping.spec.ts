import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../../../app";

describe("App status test suite", () => {
  it("should return a 200 status", async () => {
    const response = await request(app).get("/ping");

    expect(response.status).toBe(200);
  });
});
