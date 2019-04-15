
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/public`));
app.use('/css', express.static(`${__dirname}/node_modules/bootstrap/dist/css`));
app.use('/js', express.static(`${__dirname}/node_modules/bootstrap/dist/js`));
app.use('/js', express.static(`${__dirname}/node_modules/jquery/dist`));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }];

const bookRouter = require('./src/routes/bookRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const authRouter = require('./src/routes/authRoutes')(nav);

app.use('/books', bookRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.render(
    'index',
    {
      nav,
      title: 'Library',
    },
  );
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});
