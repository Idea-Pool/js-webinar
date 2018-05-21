'use strict';
/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 *
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 *
 * @param {Array.<string>} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */

function ArrayEqual(array, ignore) {
  let ignoreCharacters = [' '];
  if (ignore) ignoreCharacters.push(...ignore.slice(''));

  const newArray = array.map(item => {
    let value = item.toString().toLowerCase();
    ignoreCharacters.forEach(c => { value = value.split(c).join(''); });
    return value;
  });

  return newArray.every((val, i, arr) => !i || (val >= arr[i - 1]));
}
module.exports = ArrayEqual;