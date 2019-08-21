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
function cleanItem(item, ignore) {
    if(typeof item !== 'string') {
        return item;
    }
    return item.split("").filter(c => !ignore.includes(c)).join("").toLowerCase();
}

function arraySorted(items, ignore) {
    const toIgnore = ignore ? ignore + ' ' : ' ';
    const sorted = items.map( item => cleanItem(item, toIgnore)).sort();
    return items.every((value, index) => cleanItem(value, toIgnore) === sorted[index]);
}

module.exports = arraySorted;