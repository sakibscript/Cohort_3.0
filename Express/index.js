const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<b>Hello World</b>");
});

app.listen(3000);
