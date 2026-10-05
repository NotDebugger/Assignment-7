import { Router } from "express";
import bookController from "./book.controller.js";

export const bookRouter = Router();

bookRouter.post("/", bookController.insertOneBook);
bookRouter.post("/batch", bookController.insertMultipleBooks);
bookRouter.patch("/Future", bookController.updateBookYearTo2022);
bookRouter.get("/title", bookController.findOneWithTitle);
bookRouter.get("/year", bookController.findBooksBetween);
bookRouter.get("/genre", bookController.findBooksByGenre);
bookRouter.get("/skip-limit", bookController.skipLimit);

bookRouter.get("/year-integer", bookController.findBooksWithIntegerYear);

// Question 14
bookRouter.get("/exclude-genres", bookController.findBooksExcludingGenres);

// Question 15
bookRouter.delete("/before-year", bookController.deleteBooksBeforeYear);

// Question 16
bookRouter.get("/aggregate1", bookController.aggregateBooksAfter2000Sorted);

// Question 17
bookRouter.get("/aggregate2", bookController.aggregateBooksAfter2000Projection);

// Question 18
bookRouter.get("/aggregate3", bookController.aggregateUnwindGenres);

// Question 19
bookRouter.get("/aggregate4", bookController.aggregateBooksWithLogs);
