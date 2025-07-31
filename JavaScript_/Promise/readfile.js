const fs = require("fs");

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const read = (err, data) => {
  if (err) {
    console.log("File not found");
  } else {
    console.log(data);
  }
};

function callback() {
  fs.readFile("a.txt", "utf-8", read);
}

setTimeoutPromisified(3000).then(callback);
