const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router/index.cjs');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/steps', router.stepRouter);

module.exports = app;
