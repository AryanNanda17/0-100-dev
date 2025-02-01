const fs = require("fs");

fs.readFile("./3-read-from-file.md", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data.toString());
});
const n = 100000000000;
let sum = 0;
for (let i = 0; i < n; i++) {
  sum = sum + i;
}
console.log(sum);
