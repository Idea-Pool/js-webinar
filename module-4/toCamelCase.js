'use strict';
const CHARACTERS_TO_KEEP = "0123456789qwertzuiopasdfghjklyxcvbnm";
/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
function toCamelCase(toConvert) {
    if (typeof toConvert !== 'string') {
        return '';
    }
    return toConvert
        .split(' ')
        .map(word => word
            .split('')
            .filter(char => CHARACTERS_TO_KEEP.indexOf(char.toLocaleLowerCase()) !== -1)
            .join('')
        )
        .map(word => word.charAt(0).toLocaleUpperCase() + word.substr(1).toLocaleLowerCase())
        .join('');
}
module.exports = toCamelCase;