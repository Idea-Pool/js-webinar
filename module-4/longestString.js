/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */

function longestString(strings) {
    let paramFlattend;

    if (typeof (strings) !== "object") {
        return "";
    };
    if (Array.isArray(strings.flat(Infinity))) {
        paramFlattend = strings.flat(Infinity)
    } else {
        paramFlattend = strings;
    };
    paramFlattend = paramFlattend.filter((element) => {
        return typeof (element) === "string";
    });
    return paramFlattend.sort((a, b) => {
        return b.length - a.length;
    }).sort()[0];
};

module.exports = longestString;
