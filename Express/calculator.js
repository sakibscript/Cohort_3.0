const express = require("express");
const app = express();

// Using query
app.get("/add", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    result: a + b,
  });
});

app.get("/mul", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    result: a * b,
  });
});

// Using params
app.get("/sub/:a/:b", function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    result: a - b,
  });
});

app.get("/div/:a/:b", function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    result: a / b,
  });
});

app.listen(3000);
