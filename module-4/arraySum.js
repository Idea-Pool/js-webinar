'use strict';
/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

function arraySum(elements) {
    if (typeof elements == 'number' || elements.length == 0) {
        return 0;
    }

    function flattenDeep(arr1) {
        return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
    }

    let flateArrayItems = flattenDeep(elements);
    let onlyNums = flateArrayItems.filter(item => typeof item == 'number');
    let result = onlyNums.reduce((a, b) => a + b, 0);

    return result;
}

module.exports = arraySum