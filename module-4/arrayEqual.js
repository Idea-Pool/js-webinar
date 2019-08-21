'use strict';
/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */
function arrayEqual(first, second) {
    if(!Array.isArray(first) || !Array.isArray(second)) {
        console.warn(`Arguments are not arrays!`);
    } else if(first.length !== second.length) {
        console.warn(`Arrays have not the same length: ${first.length} !== ${second.length}!`);
    } else {
        return first.every((value, index) => {
            if(Array.isArray(value)) {
                return arrayEqual(value, second[index]);
            }
            if(value !== second[index]) {
                console.warn(`Elements are not the same: ${value} !== ${second[index]}!`);
            }
            return value === second[index];
        });
    }
    return false;
}
module.exports = arrayEqual;