const express = require('express');
const bodyParser = require('body-parser');
const data = require('../../data/database.json');

const STATUS_CODE = 200;
const app = express();
app.use(bodyParser.json());

app.get('/search', (_req, res) => {
  // const result = data.initial_config.filter((i) => i.id === '1')[0];
  const result = data.initial_config;

  console.log(result);

  return res.status(STATUS_CODE).json(result);
});

module.exports = app;
