'use strict';
/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

const ALLOWED_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz0123456789 ';
function toCamelCase(toConvert) {
  if (typeof toConvert !== 'string') return '';
  return toConvert.trim()
    .toLowerCase()
    .split('').filter(c => ALLOWED_CHARACTERS.indexOf(c) != -1).join('')
    .split(' ')
    .filter(word => word)
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join('');
}
module.exports = toCamelCase;