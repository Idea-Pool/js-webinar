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

    if (first.length != second.length) {
        console.warn("Lengths don't equal! See: " + first.length + ", " + second.length)
    }
    if (first.length === 0 && second.length=== 0){
        return true;
    }
    for (let i = 0; i < first.length; i++) {
        if (first[i] instanceof Array && second[i] instanceof Array) {
            arrayEqual(first[i],second[i])
        }
        else if (first[i] !== second[i] ) {
            console.warn("Elements don't match! See: " + first[i] + ", " +  second[i]);
            return false;
        }
        
    }
    return true; 

}


module.exports = arrayEqual;