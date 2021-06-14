/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
function arraySum(array) {
    let sum = 0;
    if (Array.isArray(array)) {
        let elements = array.flat(Infinity);
        for (let element of elements) {
            if (typeof (element) === "number") {
                sum += element;
            }
        }
    }
    return sum;
}
module.exports = arraySum;