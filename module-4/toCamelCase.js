const symbols = 'abcdefghijklmnopqrstuvwxyz0123456789 ';
/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
let toCamelCase = function (toConvert) {
    if (typeof toConvert !== 'string') return '';
    return toConvert.split('')
        .map((char) => {
            return symbols.includes(char.toLowerCase()) ? char : ' ';
        })
        .join('')
        .split(' ')
        .filter(Boolean)
        .map((word, index) => {
            if (!index) {
                return word.toLowerCase();
            } else {
                return word[0].toUpperCase() + word.slice(1).toLowerCase();
            }
        })
        .join('');
}

module.exports = toCamelCase;