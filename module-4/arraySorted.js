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
function arraySorted(items, ignore = '') {
    if (!Array.isArray(items)) return false;
    let cleaned = items.map((elem) => elem.toString().toLowerCase())
        .map((elem) => {
            return elem.split('')
                .filter((char) => !(ignore + ' \'\"\&\n\t\\\r\b\f\v\0').includes(char))
                .join('');
        });
    let sorted = cleaned.slice().sort((a, b) => a.localeCompare(b));
    if (sorted.length !== cleaned.length) return false;
    return sorted.every((elem, index) => elem === cleaned[index]);
}

module.exports = arraySorted;