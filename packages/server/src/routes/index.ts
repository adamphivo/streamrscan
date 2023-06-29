import express from "express";
import AppRouter from "./app";
import NetworkRouter from "./network";
import NodeRouter from "./node";

const Router = express.Router();

// Metadata about the application (ping, status, ...)
Router.use(AppRouter);

// Endpoints to retrieve data about the Streamr network (interest rates, reward codes, ...)
Router.use(NetworkRouter);

// Data about a certain node
Router.use(NodeRouter);

export default Router;
