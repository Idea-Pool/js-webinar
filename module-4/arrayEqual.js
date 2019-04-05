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
    var result = true;

    if (first.length !== second.length) {
        console.warn('Different lenghts: ' + first.length + ' and ' + second.length);
        return false;
    }

    for (var [key, value] of Object.entries(first)) {
        if (Array.isArray(value)) {
            result = arrayEqual(first[key], second[key]);
        } else {
            if (first[key] !== second[key]) {
                console.warn('Different array values: ' + first[key] + ' and ' + second[key]);
                return false;
            }
        }
    }

    return result;
}

module.exports = arrayEqual