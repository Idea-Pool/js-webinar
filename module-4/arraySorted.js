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

function ignoreItems(items, ignore) {
    if(typeof items !== 'string') {
        return items;
    }
    return items.split("").filter(c => !ignore.includes(c)).join("").toLowerCase();
}

function arraySorted(items, ignore) {
    const toIgnore = ignore ? ignore + ' ' : ' ';
    const sorted = items.map(item => ignoreItems(item, toIgnore)).sort();
    return items.every((value, index) => ignoreItems(value, toIgnore) === sorted[index]);
}

module.exports = arraySorted;