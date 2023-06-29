import express from "express";
import cors from "cors";
import helmet from "helmet";
import Router from "@/routes";
import { handleError } from "@/middlewares";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(Router);

app.use(handleError);

export { app };
