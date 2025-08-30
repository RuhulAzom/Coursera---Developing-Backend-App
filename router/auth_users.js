const express = require("express");
const users = require("./usersdb");
const books = require("./booksdb");
const router = express.Router();

router.post("/review/:isbn", (req, res) => {
  const username = req.session.authorization.username;
  const isbn = req.params.isbn;
  const review = req.query.review;

  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found" });
  }

  books[isbn]["reviews"][username] = review;

  return res.send(books[isbn]["reviews"]);
});

router.delete("/review/:isbn", (req, res) => {
  const username = req.session.authorization.username;
  const isbn = req.params.isbn;
  const review = req.query.review;

  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (!books[isbn]["reviews"][username]) {
    return res.status(404).json({ message: "Review not found" });
  }

  delete books[isbn]["reviews"][username];

  return res.status(200).json({ message: "Successfully delete your review" });
});

module.exports = router;
