import { db } from "../../common/db/mongodb.js";

async function createOrInsertImplicitCollection(name, authorData) {
  return await db.collection(name).insertOne(authorData);
}
export default { createOrInsertImplicitCollection };
