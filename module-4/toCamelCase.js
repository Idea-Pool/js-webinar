'use strict';
/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
const ignore = [" ", "!", "?"];

function toCamelCase(toConvert) {

    function filterword(word) {
        if (ignore.includes(word));
        else return word;
    }

    if (typeof toConvert != 'string') return "";

    toConvert = toConvert.split(" ").filter(word => filterword(word));

    for (let i = 0; i < toConvert.length; i++) {
        let words = toConvert[i].split("").map(a => filterword(a)).join("");
        toConvert[i] = words[0].toUpperCase() + words.slice(1);
    }
    return toConvert.join("");;

}
module.exports = toCamelCase;