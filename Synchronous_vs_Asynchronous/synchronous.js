const fs = require("fs");

const content1 = fs.readFileSync("a.txt", "utf-8");
console.log(content1);

const content2 = fs.readFileSync("b.txt", "utf-8");
console.log(content2);

console.log("Sakib");
