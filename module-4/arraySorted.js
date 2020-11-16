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
    if (typeof items !== 'string' || typeof ignore !== 'string') {
        return items;
    }

    return items.split("").filter(char => !ignore.includes(char)).join("").toLowerCase();
}

function arraySorted(items, ignore) {
    if (ignore) {
        ignore += " ";
    } else {
        ignore = " ";
    }
    //console.log("Items: " + items);
    //console.log("Ignore Characters: " + ignore);
    const sorted = items.map(item => ignoreItems(item, ignore)).sort()

/*     .sort(function(a, b) {
        return a - b;
      }); */

    //console.log("Sorted: " + sorted);
    return items.every((value, index) => ignoreItems(value, ignore) === sorted[index]);
}

module.exports = arraySorted;