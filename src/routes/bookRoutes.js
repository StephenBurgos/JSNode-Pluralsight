const express = require('express');

const bookRouter = express.Router();

function router(nav) {
  const books = [{
    title: 'The Time Machine',
    genre: 'Science Fiction',
    author: 'H. G. Wells',
    read: false,
  },
  {
    title: 'The Dark World',
    genre: 'Fantasy',
    author: 'Henry Kuttner',
    read: false,
  }];

  bookRouter.route('/')
    .get((req, res) => {
      res.render(
        'bookListView',
        {
          nav,
          title: 'Library',
          books,
        },
      );
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      res.render(
        'bookView',
        {
          nav,
          title: 'Library',
          book: books[req.params.id],
        },
      );
      res.send('Hello single book');
    });
  return bookRouter;
}
module.exports = router;
