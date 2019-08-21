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
    if(!Array.isArray(elements)) {
        return 0;
    }
    let sum = 0;
    elements.forEach((value => {
        if(Array.isArray(value)){
            sum += arraySum(value);
        } else if(Number.isInteger(value)) {
            sum += Number.parseInt(value);
        }
    }));
    return sum;
}
module.exports = arraySum;