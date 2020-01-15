"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare( word, guess ) {  // DO NOT MODIFY

/* YOU MAY MODIFY THE LINES BELOW */
  let ret = 0;
  const hashMap = {};
  for (let char of word) {
    const lowerCaseChar = char.toLowerCase();
    if (hashMap[lowerCaseChar]) {
      hashMap[lowerCaseChar]++;
    } else {
      hashMap[lowerCaseChar] = 1;
    }
  }
  for (let char of guess) {
    const lowerCaseChar = char.toLowerCase();
    if (hashMap[lowerCaseChar]) {
      hashMap[lowerCaseChar]--;
      ret++;
    }
  }
  return ret;
}
