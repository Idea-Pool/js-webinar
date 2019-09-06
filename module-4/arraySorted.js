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
    let output = false;
    if (items.length == 0) {
        return true;
    }

    let prettyArr = items.map((value) => {
        if (typeof value == 'string') {
            return value.replace(/[ !?@%]/g, '').toLowerCase();
        }
        else return value;
    });

    if (JSON.stringify(prettyArr) === JSON.stringify(prettyArr.sort())) {
        output = true;
    }

    return output;
};

module.exports = arraySorted;