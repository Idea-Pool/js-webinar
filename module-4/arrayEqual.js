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
    if (!Array.isArray(first) || !Array.isArray(second)) {
        console.warn('Non-array argument(s) found!');
        return false;
    }
    if (first.length !== second.length) {
        console.warn(`Different length of arrays/sub-arrays: ${first.length} vs ${second.length}`);
        return false;
    }
    return first.every((elem, index) => {
        if (Array.isArray(first[index]) && Array.isArray(second[index])) {
            return arrayEqual(first[index], second[index]);
        } else if ((Array.isArray(first[index]) && !Array.isArray(second[index]))
            || (!Array.isArray(first[index]) && Array.isArray(second[index]))) {
            console.warn(`Mismatch in nesting structure: '${first[index]}' does not equal '${second[index]}'`);
            return false;
        }
        if (elem === second[index]) {
            return true;
        } else {
            console.warn(`Mismatch: '${first[index]}' does not equal '${second[index]}'`);
            return false;
        }
    });

}

module.exports = arrayEqual;