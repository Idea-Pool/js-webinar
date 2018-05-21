'use strict';
/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

function arraySum(elements) {
  if (!elements.length) return 0;

  const flatten = function (arr, result = []) {
    arr.forEach(value => {
      if (Array.isArray(value)) flatten(value, result);
      else result.push(value);
    });
    return result;
  };

  return flatten(elements)
    .filter(element => Number.isInteger(element))
    .reduce((accumulator, currentValue) => accumulator + currentValue);

}
module.exports = arraySum;