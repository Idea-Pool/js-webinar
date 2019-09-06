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
    if (typeof strings !== 'object') {
        return '';
    }

    let final = [];
    let equal = [];

    final = strings.filter(value => typeof value === 'string').sort(function (a, b) {
        return b.length - a.length;
    });
    
    equal = final.filter(value => value.length === final[0].length);
    return equal.length ? equal.sort()[0] : final[0];
}

module.exports = longestString;