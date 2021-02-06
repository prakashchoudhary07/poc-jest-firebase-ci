const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Ok");
});

app.listen(5000, () => {
  console.log('started at port 5000');
});
