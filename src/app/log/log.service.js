import logRepository from "./log.repository.js";

async function createLogsCollection() {
  return await logRepository.createLogsCollection();
}

async function insertLog(bookId, action) {
  return await logRepository.insertLog(bookId, action);
}

export default { createLogsCollection, insertLog };
