const fs = require("fs");
function test() {
  pr = new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function fn(err, data) {
      resolve(data);
    });
  });
  return pr;
}
function onDone(data) {
  console.log(data);
}

a = test();
a.then(onDone);
