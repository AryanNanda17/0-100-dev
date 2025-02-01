counter = 0;
// Recursive
function count() {
  counter = counter + 1;
  console.log(counter);
  setTimeout(count, 1000);
}

count();
