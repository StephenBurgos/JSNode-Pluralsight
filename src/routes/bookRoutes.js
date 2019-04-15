const express = require('express');
const sql = require('mssql');

const bookRouter = express.Router();

function router(nav) {
  bookRouter.route('/')
    .get((req, res) => {
      (async function query() {
        const request = new sql.Request();
        const { recordset } = await request.query('select * from books');
        res.render(
          'bookListView',
          {
            nav,
            title: 'Library',
            books: recordset,
          },
        );
      }());
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      (async function query() {
        const { id } = req.params;
        const request = new sql.Request();
        const { recordset } = await request.input('id', sql.Int, id)
          .query('select * from books where id = @id');
        res.render(
          'bookView',
          {
            nav,
            title: 'Library',
            book: recordset[0],
          },
        );
      }());
      res.send('Hello single book');
    });
  return bookRouter;
}
module.exports = router;
