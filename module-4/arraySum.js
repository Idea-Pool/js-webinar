/**
 * It receives an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
function arraySum(elements) {
    if (!Array.isArray(elements) || elements.length < 2) return 0;
    let resultArray = [0];

    function getIntegers(arr) {
        resultArray = resultArray.concat(arr.filter((elem) => {
            return (typeof elem === 'number' && elem % 1 === 0);
        }));
        for (const elem of arr) {
            if (Array.isArray(elem)) {
                getIntegers(elem);
            }
        }
    }

    getIntegers(elements);
    return resultArray.reduce((accum, elem) => accum + elem, 0);
}

module.exports = arraySum;