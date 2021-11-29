/**
 * It reverses the given object, i.e. return a copy of the object 
 * where the keys have become the values and the values the keys
 * 
 * @param {object} o the object
 * @returns {object} the new object
 */
module.exports = function reverseObject(o) {
    if (Object.prototype.toString.call(o) === '[object Object]') {
        let newO = {};
        for (let key in o) {
            newO[o[key]] = key;
        }
        return newO;
    } else throw new Error('Argument is not an object!');
}