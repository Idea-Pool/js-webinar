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
function isTypeOfElementsIdentical(array1, array2) {
    return array1.every((index) => typeof (array1[index]) === typeof (array2[index]));
}

function findFirstDifferentElementOfArray(array1, array2) {
    return array1.filter(e => !array2.includes(e));
}

function arrayEqual(array1, array2) {
    if (array1.length !== array2.length) {
        console.warn(`${array1.length} vs ${array2.length}`);
        return false;
    }
    else if (array1 == array2.toString() && isTypeOfElementsIdentical(array1, array2) === true) {
        return true;
    }
    else {      
        console.warn(`${findFirstDifferentElementOfArray(array1, array2)} vs ${findFirstDifferentElementOfArray(array2, array1)}`);
        return false;
    }
}
module.exports = arrayEqual;