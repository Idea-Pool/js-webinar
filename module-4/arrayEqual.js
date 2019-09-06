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
    let equlity = true;
    if (first.length !== second.length) {
        console.warn(`Arrays have different length! 1st array length: ${first.length}, 2nd: ${second.length}`);
        equlity = false;
    }

    else {
        first.forEach((value, i) => {
            if (Array.isArray(first[i]) && Array.isArray(second[i])) {
                return arrayEqual(first[i], second[i]);
            } else if (!Array.isArray(first[i]) && !Array.isArray(second[i])) {
                if (first[i] !== second[i]) {
                    console.warn(`Value "${first[i]}" in the first array differ to value "${second[i]}" in second!`);
                    equlity = false;
                }
            } 
            else {
                console.warn(`Case when one value is array and another is not`);
                equlity = false;
            }
        });
    }
    return equlity;
}

module.exports = arrayEqual;