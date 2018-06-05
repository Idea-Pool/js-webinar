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
    let result = [];
    let duplicate = [];
    if(typeof strings !== "object") {
        return "";
    }
    result = strings.filter(data => typeof data === "string").sort(function(a, b) {
        return b.length - a.length;
    })
    duplicate = result.filter(data => data.length === result[0].length)
    
    return duplicate.length ? duplicate.sort()[0]: result[0];
}

module.exports = longestString;