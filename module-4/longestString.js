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
    if(!Array.isArray(strings)){
        return "";
    }
    const sorted = [...strings].sort().sort((a, b) => {
        if(typeof a !== "string"){
            return true;
        }
        return b.length - a.length;
    });
    return sorted[0];
}

module.exports = longestString;