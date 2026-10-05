import { ObjectId } from "mongodb";
import { db } from "../../common/db/mongodb.js";

async function createLogsCollection() {
  return await db.createCollection("logs", {
    capped: true,
    size: 1024 * 1024,
  });
}
async function insertLog(bookId, action) {
  return await db
    .collection("logs")
    .insertOne({ bookId: new ObjectId(bookId), action });
}

export default { createLogsCollection, insertLog };
