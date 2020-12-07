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
    const firstFlattend = first.flat(Infinity);
    const secondFlattend = second.flat(Infinity);
    const firstLength = firstFlattend.length;
    const secondLength = secondFlattend.length;

    if (firstLength !== secondLength) {
        console.warn(`The length of the arrays are different:\nLength of the first array: ${firstLength}. \nLength of the second array: ${secondLength}.`);
        return false;
    }; 
    for (let i = 0; i < firstLength; ++i) {
        if (firstFlattend[i] !== secondFlattend[i]) {
            console.warn(`Different element was found!:\nThe ${i}th element in the first array is: ${firstFlattend[i]}.\nThe ${i}th element in the second array is: ${secondFlattend[i]}.`);
            return false;
        }
    }
    return true;
};

module.exports = arrayEqual;
