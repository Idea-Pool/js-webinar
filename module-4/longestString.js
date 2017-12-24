'use strict';
/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */

 function longestString(strings) {
    if (!Array.isArray(strings)) {
        return "";
    }
    return strings
        .filter(element => typeof element === 'string')
        .sort()
        .reverse()
        .reduce((a, b) => a.length > b.length ? a : b);
 }
 module.exports = longestString;