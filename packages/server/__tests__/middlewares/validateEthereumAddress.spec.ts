import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "@/app";

describe("Validate ethereum address middleware test suite", () => {
  it("should send a 400", async () => {
    const response = await request(app).get("/address-error/wrongEthereumAddress");
    expect(response.status).toBe(400);
  });
  it("should let the execution continue", async () => {
    const response = await request(app).get("/address-error/0xe53023347b757a04e4130ae8948f1fb7b2632d9e");
    expect(response.status).toBe(200);
  });
});
