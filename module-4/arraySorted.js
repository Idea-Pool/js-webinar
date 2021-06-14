/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */
const arrayEqual = require('./arrayEqual');
function checkTypeOfArrayElements(array, type) {
    return array.every(element => typeof (element) === type);
}
function arraySorted(items) {
    let sortedArray = items.slice();
    sortedArray.sort(function (a, b) {
        if (checkTypeOfArrayElements(sortedArray, "number")) {
            return sortedArray.sort();
        }
        else if (checkTypeOfArrayElements(sortedArray, "string")) {
            return a.localeCompare(b, 'en', { ignorePunctuation: true, sensitivity: 'base' });
        }
        else { throw new Error("algorithm is undefined"); }
    });;   
    if (arrayEqual(items, sortedArray)) {        
        return true;
    }
    else {       
        return false;
    }
}

module.exports = arraySorted;