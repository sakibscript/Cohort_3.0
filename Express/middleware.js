const express = require("express");
const app = express();

let request = 0;
function numOfRequest(req, res, next) {
  request = request + 1;
  if (req.headers.cookie !== "google") {
    console.log(`Total no. of request: ${request}`);
    res.json({
      //ending the request response
      message: "You are not allowed access the site",
    });
  } else {
    req.name = "Sakib"; //Modify the request
    next();
  }
}

app.get("/sum", numOfRequest, function (req, res) {
  console.log(req.name);
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    result: a + b,
  });
});

app.use(numOfRequest()); //working for just multiplication and division

app.get("/mul", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    result: a * b,
  });
});
app.get("/div", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    result: a / b,
  });
});

app.listen(3000);
