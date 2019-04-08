'use strict';
/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

let sum = 0;
function arraySum(elements) {


    if (typeof elements != 'object') {
        return 0;
    }

    for (let i = 0; i < elements.length; i++) {
        if (typeof elements[i] == 'object') {
            sum = arraySum(elements[i]);
        }
        if (typeof elements[i] != 'number') continue;
        else sum += elements[i];

    }
    let tmp = sum;
    sum = 0;
    return tmp;
}

module.exports = arraySum;