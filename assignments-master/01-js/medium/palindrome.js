function isPalindrome(str) {
  // Convert to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let s = 0;
  let e = str.length - 1;

  while (s <= e) {
    if (str[s] != str[e]) {
      return false;
    }
    s++;
    e--;
  }

  return true;
}

module.exports = isPalindrome;
