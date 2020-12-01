/**
 * It reverses the given object, i.e. return a copy of the object 
 * where the keys have become the values and the values the keys
 * 
 * @param {object} o the object
 * @returns {object} the new object
 */

 reverse = (o) => {
    if(typeof o !== "object"){
        throw new Error("Not object is passed as argument!");
    }
    let result = {};
    for(const key in o){
        result[o[key]] = key;
    }
    return result;
 }

module.exports = reverse;