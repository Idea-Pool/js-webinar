/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

arraySum = (elements) => {
    if (!Array.isArray(elements)){
        return 0;
    }

    let sum = 0;
    elements.forEach(element => {
        if (Array.isArray(element)){
            sum += arraySum(element);
        }
        if(typeof element === "number"){
            sum += element;
        }
    });
    return sum;
}

module.exports = arraySum;