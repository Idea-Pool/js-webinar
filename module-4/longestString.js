'use strict';
/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */
module.exports = strings => {
    let longest = '';
    if (Array.isArray(strings)) {
        strings.forEach(string => {
            if (typeof string === 'string' && string.length > longest.length) {
                longest = string;
            }
        });
    }
    return longest;
};