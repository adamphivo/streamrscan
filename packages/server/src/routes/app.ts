import express from "express";
import { validateEthereumAddress } from "../middlewares";
import { ping, getStatus, getError, getAddressError } from "../controllers/app";

const AppRouter = express.Router();

AppRouter.get("/ping", ping);

AppRouter.get("/status", getStatus);

// Routes made to test specific middlewares
AppRouter.get("/address-error/:address", [validateEthereumAddress], getAddressError);
AppRouter.get("/error", getError);

export default AppRouter;
