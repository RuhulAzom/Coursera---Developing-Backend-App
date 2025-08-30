const express = require("express");
const books = require("./booksdb");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send(books);
});

router.get("/isbn/:isbn", (req, res) => {
  const findBook = books[req.params.isbn];
  if (!findBook) {
    return res.status(404).json({ message: "Book not found" });
  }
  return res.send(findBook);
});

router.get("/author/:author", (req, res) => {
  const booksArray = Object.values(books);
  const filteredBooks = booksArray.filter((item) =>
    item.author.toLowerCase().includes(req.params.author.toLowerCase())
  );
  if (filteredBooks.length === 0) {
    return res.status(404).json({ message: "Book not found" });
  }
  return res.send(filteredBooks);
});

router.get("/title/:title", (req, res) => {
  const booksArray = Object.values(books);
  const filteredBooks = booksArray.filter((item) =>
    item.title.toLowerCase().includes(req.params.title.toLowerCase())
  );
  if (filteredBooks.length === 0) {
    return res.status(404).json({ message: "Book not found" });
  }
  return res.send(filteredBooks);
});

router.get("/review/:isbn", (req, res) => {
  const findBook = books[req.params.isbn];
  if (!findBook) {
    return res.status(404).json({ message: "Book not found" });
  }
  return res.send(findBook.reviews);
});

module.exports = router;
