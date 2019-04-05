'use strict';

const CHARACTERS_TO_KEEP = "0123456789qwertzuiopasdfghjklyxcvbnm"


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

    return toConvert.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
        .join('')
        .split('')
        .filter(char => CHARACTERS_TO_KEEP.indexOf(char.toLowerCase()) !== -1)
        .map((char, index) => (index === 0) ? char.toLowerCase() : char)
        .join('');
}

module.exports = toCamelCase