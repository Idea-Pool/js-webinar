/**
 * It receives an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */
function longestString(strings) {
    if (!Array.isArray(strings) || strings.length < 2) return '';
    let resultArray = [];

    function getStrings(arr) {
        resultArray = resultArray.concat(arr.filter((string) => {
            return typeof string === 'string';
        }));
        for (const elem of arr) {
            if (Array.isArray(elem)) {
                getStrings(elem);
            }
        }
    }

    getStrings(strings);
    if (resultArray.length) {
        return resultArray.sort((a, b) => {
            if (b.length > a.length) return 1;
            if (b.length < a.length) return -1;
            if (b.length === a.length) return (a.localeCompare(b));
        })[0];
    } else return '';
}

module.exports = longestString;