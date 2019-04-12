
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(morgan('tiny'));
app.use(express.static(`${__dirname}/public`));
app.use('/css', express.static(`${__dirname}/node_modules/bootstrap/dist/css`));
app.use('/js', express.static(`${__dirname}/node_modules/bootstrap/dist/js`));
app.use('/js', express.static(`${__dirname}/node_modules/jquery/dist`));

app.get('/', (req, res) => {
  res.render('index', { list: ['a', 'b'], title: 'Library' });
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});
