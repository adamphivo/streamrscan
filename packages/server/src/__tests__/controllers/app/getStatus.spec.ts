import { describe, it, expect } from "vitest";
import request from "supertest";
import { AppStatusParser } from "../../../schemas";
import { app } from "../../../app";

describe("Ping test suite", () => {
  it("should return a 200 status", async () => {
    const response = await request(app).get("/status");

    expect(response.status).toBe(200);
    AppStatusParser.parse(response.body);
  });
});
