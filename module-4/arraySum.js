/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

function arraySum(elements) {
    let paramFlattend;
    let sum = 0;

    if (typeof (elements) !== "object") {
        return sum;
    };
    if (Array.isArray(elements.flat(Infinity))) {
        paramFlattend = elements.flat(Infinity)
    } else {
        paramFlattend = elements;
    };
    paramFlattend.forEach(element => {
        if (typeof (element) === "number") {
            sum += element;
        };
    });
    return sum;
};

module.exports = arraySum;
