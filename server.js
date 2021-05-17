const express = require('express');
const colortheif = require('colorthief');

const app = express();

app.get('/', async (req, res) => {
  res.send('Ok');
});

app.get('/color', async (req, res) => {
  const dominant = await colortheif.getColor(
    'https://lokeshdhakar.com/projects/color-thief/image-2.4461c1c0.jpg'
  );
  console.log(dominant);
  res.send(dominant);
});

app.listen(5000, () => {
  console.log('started at port 5000');
});
