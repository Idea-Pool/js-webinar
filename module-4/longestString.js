/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */

longestString = (strings) => {
    if (!Array.isArray(strings)){
        return "";
    }

    strings.sort((a, b) => {
        return a.length - b.length;
    }).sort();

    return strings[0];
}

module.exports = longestString;