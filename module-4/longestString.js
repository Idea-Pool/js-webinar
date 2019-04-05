'use strict';
/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */


function longestString(inputStrings) {
    if (typeof inputStrings == 'string') {
        return '';
    }

    inputStrings.sort();
    inputStrings.sort(function (a, b) {
        b.length - a.length
    })

    return inputStrings[0];
}

module.exports = longestString