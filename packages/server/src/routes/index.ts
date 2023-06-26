import express from "express";
import AppRouter from "./app";

const Router = express.Router();

// Metadata about the application (ping, status, ...)
Router.use(AppRouter);

export default Router;
