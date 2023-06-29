import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import Router from "@/routes";
import { handleError } from "@/middlewares";
import { init } from "@/jobs";

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("common"));
app.use(express.json());
app.use(Router);

// Start jobs
init();

app.use(handleError);

export { app };
