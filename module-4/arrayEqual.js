'use strict';
/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 *
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 *
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */

function ArrayEqual(first, second) {
  if (first.length != second.length) {
    console.warn(`Length of the arrays are different: first.length=${first.length}, second.length= ${second.length} `);
    return false;
  }

  let equal = true;
  first.forEach((value, i) => {
    if (value instanceof Array && second[i] instanceof Array) {
      ArrayEqual(value, second[i]);
    } else if (value !== second[i]) {
      console.warn(`first[${i}]=${value} second[${i}]=${second[i]}`);
      equal = false;
    }
  });
  return equal;
}
module.exports = ArrayEqual;