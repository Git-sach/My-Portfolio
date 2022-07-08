const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const index = require('./routes/index')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json());
app.use(index);

app.listen(4000);