/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */
function longestString(arrayOfString) {
    let maxLength = 0;
    let maxLengthElement = '';
    if (Array.isArray(arrayOfString)) {
        arrayOfString.sort();
        for (let element of arrayOfString) {
            if (element.length > maxLength) {
                maxLength = element.length;
                maxLengthElement = element;
            }
        }
    }
    return maxLengthElement;
}
module.exports = longestString;