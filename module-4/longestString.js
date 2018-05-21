'use strict';
/**
 * It receives an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */

function longestString(elements) {
  if (!Array.isArray(elements)) return '';

  return elements.filter(element => typeof element === 'string')
    .sort()
    .reduce((max, current) => max.length < current.length ? current : max);
}
module.exports = longestString;