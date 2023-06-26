import express from "express";
import { ping, getStatus, getError, getAddressError } from "../controllers/app";
import { validateEthereumAddress } from "../middlewares";

const AppRouter = express.Router();

AppRouter.get("/ping", ping);

AppRouter.get("/status", getStatus);

// Routes made to test specific middlewares
AppRouter.get("/address-error/:address", [validateEthereumAddress], getAddressError);
AppRouter.get("/error", getError);

export default AppRouter;
