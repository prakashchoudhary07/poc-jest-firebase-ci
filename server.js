const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  try {
    res.send('Ok');
  } catch (err) {
    res.status(500).json('Error while doing some thing', err);
  }
});

app.use(async (req, res) => {
  res.status(500).json('NOT FOUND');
});

const port = process.env.PORT || '5000';

app.listen(port, () => {
  console.log('started at port', port);
});
