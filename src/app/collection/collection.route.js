import { Router } from "express";
import bookController from "../book/book.controller.js";
import authorController from "../author/author.controller.js";
import logController from "../log/log.controller.js";

export const collectionRouter = Router();

collectionRouter.post("/books", bookController.createExplicitCollection);
collectionRouter.post("/books/index", bookController.createIndexForTitle);
collectionRouter.post(
  "/authors",
  authorController.createOrInsertImplicitCollection,
);
collectionRouter.post("/logs/capped", logController.createLogsCollection);
