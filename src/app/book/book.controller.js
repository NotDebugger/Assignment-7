import bookService from "./book.service.js";

async function createExplicitCollection(req, res, next) {
  try {
    await bookService.createExplicitCollection("books");

    res.status(201).json({
      message: "collection created successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function createIndexForTitle(req, res, next) {
  try {
    await bookService.createIndexForTitle();

    res.status(201).json({
      message: "Index created successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function insertOneBook(req, res, next) {
  try {
    const book = req.body;
    const result = await bookService.insertOneBook(book);

    res.json({
      message: "book inserted successfully",
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function insertMultipleBooks(req, res, next) {
  try {
    const { books } = req.body;
    const result = await bookService.insertMultipleBooks(books);

    res.json({
      message: "book inserted successfully",
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function updateBookYearTo2022(req, res, next) {
  try {
    const result = await bookService.updateBookYearTo2022("Future");

    res.json({
      message: "book year updated successfully",
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function findOneWithTitle(req, res, next) {
  try {
    const title = req.query.title;
    const result = await bookService.findOneWithTitle(title);

    res.json({
      message: "book found successfully",
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function findBooksBetween(req, res, next) {
  try {
    const from = req.query.from;
    const to = req.query.to;
    const result = await bookService.findBooksBetween(from, to);

    res.json({
      message: "books found successfully",
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function findBooksByGenre(req, res, next) {
  try {
    const genre = req.query.genre;
    const result = await bookService.findBooksByGenre(genre);

    res.json({
      message: "book found successfully",
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}
async function skipLimit(req, res, next) {
  try {
    const result = await bookService.skipLimit();

    res.json({
      message: "books found successfully",
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function findBooksWithIntegerYear(req, res) {
  try {
    const books = await bookService.findBooksWithIntegerYear();

    res.json(books);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function findBooksExcludingGenres(req, res) {
  try {
    const books = await bookService.findBooksExcludingGenres();

    res.json(books);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function deleteBooksBeforeYear(req, res) {
  try {
    const year = +req.query.year;

    const result = await bookService.deleteBooksBeforeYear(year);

    res.json({
      message: "Books deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function aggregateBooksAfter2000Sorted(req, res) {
  try {
    const books = await bookService.getBooksAfter2000Sorted();

    res.json(books);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function aggregateBooksAfter2000Projection(req, res) {
  try {
    const books = await bookService.getBooksAfter2000Projection();

    res.json(books);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function aggregateUnwindGenres(req, res) {
  try {
    const books = await bookService.getBooksWithGenresSeparated();

    res.json(books);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

async function aggregateBooksWithLogs(req, res) {
  try {
    const books = await bookService.getBooksWithLogs();

    res.json(books);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

export default {
  createExplicitCollection,
  createIndexForTitle,
  insertOneBook,
  insertMultipleBooks,
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
