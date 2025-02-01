const fs = require("fs");

fs.readFile("1-file-cleaner.md", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  data = data.toString();
  console.log("before trimming", data);
  data = data.replace(/\s+/g, " ").trim();
  fs.writeFile("1-file-cleaner.md", data, (err) => {
    if (err) {
      console.log("Error writing file:", err);
      return;
    }
    console.log("after trimming", data);
  });
});
