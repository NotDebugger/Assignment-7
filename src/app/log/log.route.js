import { Router } from "express";
import logController from "./log.controller.js";

export const logRouter = Router();

logRouter.post("/", logController.insertLog);
