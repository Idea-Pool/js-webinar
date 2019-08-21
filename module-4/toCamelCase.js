'use strict';
/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
function toCamelCase(toConvert) {
    if(typeof toConvert !== 'string'){
        return "";
    }
    return toConvert
        .split(" ")
        .map((word) => {
            return word.replace(/\W/g, "");
        })
        .filter(Boolean)
        .map((word, i) => {
            if(!i) {
                return word.toLowerCase();
            }
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
}

module.exports = toCamelCase;