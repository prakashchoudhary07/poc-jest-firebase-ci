const express = require('express');
const colortheif = require('colorthief');

const app = express();

app.get('/', async (req, res) => {
  try {
    res.send('Ok');
  } catch (err) {
    res.status(500).json('Error while doing some thing', err);
  }
});

app.get('/color', async (req, res) => {
  try {
    const dominant = await colortheif.getColor(
      'https://lokeshdhakar.com/projects/color-thief/image-2.4461c1c0.jpg'
    );
    console.log(dominant);
    res.send(dominant);
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
