import logService from "./log.service.js";

async function createLogsCollection(req, res, next) {
  await logService.createLogsCollection();

  res.json({
    message: "collection created successfully",
    success: true,
  });
}

async function insertLog(req, res, next) {
  const bookId = req.body.book_id;
  const action = req.body.action;

  await logService.insertLog(bookId, action);

  res.json({
    message: "Log inserted successfully",
    success: true,
  });
}

export default { createLogsCollection, insertLog };
