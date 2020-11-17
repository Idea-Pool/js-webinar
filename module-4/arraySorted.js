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
    let strings = items.map(item => {
        return item.toString().toLowerCase().replace(/\s/g, "");
    });

    if (ignore) {
        strings = strings.map(item => {
            return item.split("").filter(char => {
                return !ignore.includes(char);
            }).join("");
        });
    }

    const sorted = [...strings].sort();
    //console.log("Sorted: " , sorted);
    return strings.every((value, index) => {
        //console.log(value , index, sorted[index]);
        return value === sorted[index];
    })
}
module.exports = arraySorted;