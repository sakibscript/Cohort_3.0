const fs = require("fs");

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function callback() {
  return new Promise((resolve, reject) => {
    fs.readFile("a.txt", "utf-8", (err, data) => {
      if (err) {
        reject("File not found");
      } else {
        resolve(data);
      }
    });
  });
}

function onData(data) {
  console.log("File contents:", data);
}

function onError(err) {
  console.log("Error:", err);
}

setTimeoutPromisified(3000).then(callback).then(onData).catch(onError);
