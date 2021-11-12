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

function arraySorted(items, ignore) {
    let itemsFlattend;
    let replace = new RegExp(`[${ignore}]`, "g");

    if (Array.isArray(items.flat(Infinity))) {
        itemsFlattend = items.flat(Infinity)
    } else {
        itemsFlattend = items;
    };
    for (let i = 0; i < itemsFlattend.length; ++i) {
        itemsFlattend[i] = String(itemsFlattend[i]).toLowerCase().replace(/\s/g,"");
        if (ignore !== undefined) {
            itemsFlattend[i] = itemsFlattend[i].replace(replace, "");
        };
    };
    for (let i = 1; i < itemsFlattend.length; ++i) {

        if (itemsFlattend[i] < itemsFlattend[i - 1]) {
            return false;
        };
    };
    return true;
};

module.exports = arraySorted;
