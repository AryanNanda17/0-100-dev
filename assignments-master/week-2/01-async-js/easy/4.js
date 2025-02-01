const fs = require("fs");

fs.writeFile("./4-write-to-file.md", " Yoooooooooooo", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File has been written");
});

const n = 1000000;
let sum = 0;
for (let i = 0; i < n; i++) {
  sum = sum + i;
}
console.log(sum);
