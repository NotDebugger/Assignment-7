import authorService from "./author.service.js";

async function createOrInsertImplicitCollection(req, res, next) {
  const authorData = req.body;

  const result = await authorService.createOrInsertImplicitCollection(
    "authors",
    authorData,
  );

  res.json({
    message: "collection created successfully",
    success: true,
    result,
  });
}

export default { createOrInsertImplicitCollection };
