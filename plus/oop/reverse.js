/**
 * It reverses the given object, i.e. return a copy of the object 
 * where the keys have become the values and the values the keys
 * 
 * @param {object} o the object
 * @returns {object} the new object
 */

const reverse = o => {
    if (typeof o !== 'object') {
        throw new Error('o has to be an object');
    }
    return Object.fromEntries(Object.entries(o).map(([key, value]) => [value, key]));

}
module.exports = reverse;