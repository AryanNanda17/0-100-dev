/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (numbers.length == 0) return undefined;
  let value = -9999;
  for (no of numbers) {
    if (no > value) {
      value = no;
    }
  }
  return value;
}

module.exports = findLargestElement;
