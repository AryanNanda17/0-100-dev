/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
f*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length != str2.length) {
    return false;
  }
  const myMap1 = new Map();
  for (let letter of str1) {
    myMap1.set(letter, (myMap1.get(letter) || 0) + 1);
  }
  for (let letter of str2) {
    if (!myMap1.has(letter)) return false;
    myMap1.set(letter, myMap1.get(letter) - 1);
  }
  for (const [key, value] of myMap1) {
    if (value != 0) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
