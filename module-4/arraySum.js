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
    let sum = 0;

    if (!elements.length) {
        return sum;
    }

    elements.forEach((value => {
        if (Array.isArray(value)) {
            sum = sum + arraySum(value);
        }
        else if (Number.isInteger(value)) {
            sum = sum + Number.parseInt(value);
        }
    }));

    return sum;
};

module.exports = arraySum; 