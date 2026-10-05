import express from "express";
import { bookRouter } from "./app/book/book.route.js";
import { logRouter } from "./app/log/log.route.js";
import { collectionRouter } from "./app/collection/collection.route.js";

const app = express();

app.use(express.json());

app.use("/collection", collectionRouter);
app.use("/books", bookRouter);
app.use("/logs", logRouter);

app.listen(3000, () => console.log("server is running on port 3000"));
