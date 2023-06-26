import express from "express";
import AppRouter from "./app";
import NetworkRouter from "./network";

const Router = express.Router();

// Metadata about the application (ping, status, ...)
Router.use(AppRouter);

// Endpoints to retrieve data about the Streamr network (interest rates, reward codes, ...)
Router.use(NetworkRouter);

export default Router;
