'use strict';
/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {Array.<string>} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */


function arraySorted(items, ignore) {

    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (items.length == 0) return true;

    let isNumberArray = undefined;
    for (let i = 0; i < items.length; i++) {
        if (typeof items[i] != "number") isNumberArray = false;
        else isNumberArray = true;
    }

    if (isNumberArray == true) {
        let copiedArray = items.slice();
        if (items.toString() == copiedArray.sort().toString()) return true;
        else return false;
    }

    let ignoreChars = [];
    if (ignore != null) {
        ignoreChars = ignore.split('');
    }


    for (let i = 0; i < items.length; i++) {

        let charArray = items[i].split("").filter(char => !ignoreChars.includes(char)).filter(char => (char != ' '));
        items[i] = charArray.join('').toLowerCase();

    }

    let copiedArray = items.slice();
    if (items.toString() == copiedArray.sort().toString()) return true;
    else return false;


}


module.exports = arraySorted;