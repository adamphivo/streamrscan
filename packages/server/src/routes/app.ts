import express from "express";
import { AppStatusParser } from "../schemas";

const AppRouter = express.Router();

AppRouter.get("/ping", (req, res, next) => {
  res.json();
});

AppRouter.get("/status", (req, res, next) => {
  const uptime = process.uptime();

  const parsedData = AppStatusParser.parse({ status: "OK", uptime });

  return res.json(parsedData);
});

export default AppRouter;
