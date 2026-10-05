import bookRepository from "./book.repository.js";

async function createExplicitCollection(name) {
  return bookRepository.createExplicitCollection(name);
}

async function createIndexForTitle() {
  return bookRepository.createIndexForTitle();
}

async function insertOneBook(book) {
  return bookRepository.insertOneBook(book);
}

async function insertMultipleBooks(books) {
  return bookRepository.insertMultipleBooks(books);
}

async function updateBookYearTo2022(title) {
  return bookRepository.updateBookYearTo2022(title);
}
async function findOneWithTitle(title) {
  return bookRepository.findOneWithTitle(title);
}

async function findBooksBetween(from, to) {
  return bookRepository.findBooksBetween(from, to);
}
async function findBooksByGenre(genre) {
  return bookRepository.findBooksByGenre(genre);
}
async function skipLimit() {
  return bookRepository.skipLimit();
}
async function findBooksWithIntegerYear() {
  return await bookRepository.findBooksWithIntegerYear();
}

async function findBooksExcludingGenres() {
  return await bookRepository.findBooksExcludingGenres();
}

async function deleteBooksBeforeYear(year) {
  return await bookRepository.deleteBooksBeforeYear(year);
}

async function getBooksAfter2000Sorted() {
  return await bookRepository.aggregateBooksAfter2000Sorted();
}

async function getBooksAfter2000Projection() {
  return await bookRepository.aggregateBooksAfter2000Projection();
}

async function getBooksWithGenresSeparated() {
  return await bookRepository.aggregateUnwindGenres();
}

async function getBooksWithLogs() {
  return await bookRepository.aggregateBooksWithLogs();
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
  getBooksAfter2000Sorted,
  getBooksAfter2000Projection,
  getBooksWithGenresSeparated,
  getBooksWithLogs,
};
