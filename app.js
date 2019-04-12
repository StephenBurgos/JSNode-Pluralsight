
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
const bookRouter = express.Router();
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(express.static(`${__dirname}/public`));
app.use('/css', express.static(`${__dirname}/node_modules/bootstrap/dist/css`));
app.use('/js', express.static(`${__dirname}/node_modules/bootstrap/dist/js`));
app.use('/js', express.static(`${__dirname}/node_modules/jquery/dist`));

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
  .get((reg, res) => {
    res.render(
      'books',
      {
        nav: [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }],
        title: 'Library',
        books,
      },
    );
  });

bookRouter.route('/single')
  .get((reg, res) => {
    res.send('Hello single book');
  });

app.use('/books', bookRouter);
app.get('/', (req, res) => {
  res.render(
    'index',
    {
      nav: [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }],
      title: 'Library',
    },
  );
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});
