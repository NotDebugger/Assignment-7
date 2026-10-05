import { db } from "../../common/db/mongodb.js";

async function createExplicitCollection(name) {
  return await db.createCollection(name, {
    validator: {
      title: {
        $type: "string",
        $ne: "",
      },
    },
  });
}

async function createIndexForTitle() {
  return await db.collection("books").createIndex({ title: 1 });
}

async function insertOneBook(book) {
  return await db.collection("books").insertOne(book);
}

async function insertMultipleBooks(books) {
  return await db.collection("books").insertMany(books);
}

async function updateBookYearTo2022(title) {
  return db.collection("books").updateOne({ title }, { $set: { year: 2022 } });
}

async function findOneWithTitle(title) {
  return db.collection("books").findOne({ title });
}

async function findBooksBetween(form, to) {
  return db
    .collection("books")
    .find({
      year: {
        $gte: +form,
        $lte: +to,
      },
    })
    .toArray();
}

async function findBooksByGenre(genre) {
  return db.collection("books").find({ genres: genre }).toArray();
}

async function skipLimit() {
  return db
    .collection("books")
    .find({}, { skip: 2, limit: 3, sort: { year: -1 } })
    .toArray();
}

async function findBooksWithIntegerYear() {
  return db
    .collection("books")
    .find({
      year: { $type: "int" },
    })
    .toArray();
}

async function findBooksExcludingGenres() {
  return db
    .collection("books")
    .find({
      genres: {
        $nin: ["Horror", "Science Fiction"],
      },
    })
    .toArray();
}

async function deleteBooksBeforeYear(year) {
  return db.collection("books").deleteMany({
    year: { $lt: year },
  });
}

async function aggregateBooksAfter2000Sorted() {
  return db
    .collection("books")
    .aggregate([
      {
        $match: {
          year: { $gt: 2000 },
        },
      },
      {
        $sort: {
          year: -1,
        },
      },
    ])
    .toArray();
}

async function aggregateBooksAfter2000Projection() {
  return db
    .collection("books")
    .aggregate([
      {
        $match: {
          year: { $gt: 2000 },
        },
      },
      {
        $project: {
          _id: 0,
          title: 1,
          author: 1,
          year: 1,
        },
      },
    ])
    .toArray();
}

async function aggregateUnwindGenres() {
  return db
    .collection("books")
    .aggregate([
      {
        $unwind: "$genres",
      },
    ])
    .toArray();
}

async function aggregateBooksWithLogs() {
  return db
    .collection("logs")
    .aggregate([
      {
        $lookup: {
          from: "books",
          localField: "bookId",
          foreignField: "_id",
          as: "book_details",
        },
      },
      {
        $project: {
          _id: 0,
          action: 1,
          "book_details.title": 1,
          "book_details.author": 1,
          "book_details.year": 1,
        },
      },
    ])
    .toArray();
}

export default {
  createExplicitCollection,
  createIndexForTitle,
  insertMultipleBooks,
  insertOneBook,
  updateBookYearTo2022,
  findOneWithTitle,
  findBooksBetween,
  findBooksByGenre,
  skipLimit,
  findBooksWithIntegerYear,
  findBooksExcludingGenres,
  deleteBooksBeforeYear,
  aggregateBooksAfter2000Sorted,
  aggregateBooksAfter2000Projection,
  aggregateUnwindGenres,
  aggregateBooksWithLogs,
};
