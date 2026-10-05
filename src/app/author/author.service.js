import authorRepository from "./author.repository.js";

async function createOrInsertImplicitCollection(name, authorData) {
  return await authorRepository.createOrInsertImplicitCollection(
    name,
    authorData,
  );
}

export default { createOrInsertImplicitCollection };
