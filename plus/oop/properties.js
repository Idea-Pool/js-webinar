/**
 * It returns the property names of the given object.
 * 
 * @param {object} o the object
 * @returns {string[]} the list of the properties of the object
 *                     or empty array if it is not an object
 */
module.exports = function props(o) {
    if (Object.prototype.toString.call(o) === '[object Object]') {
        return Object.keys(o);
    } return [];
}