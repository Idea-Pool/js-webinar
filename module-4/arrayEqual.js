
'use strict';

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
     if (first.length !== second.length) {
        console.warn("the length of two arrays are different " + first.length.toString() + " and " + second.length.toString());
        return false;
     } 
     if (first[0] !== second[0] && typeof first[0] !== "object"){
         console.warn("two arrays are different " + first[0].toString() + " and " + second[0].toString());
         return false;
     }
     return first.every(function(element, index){
         if (typeof element !== "object") {
            return element === second[index];
         } else {
            return arrayEqual(element, second[index]);
         }
     })
 }

 module.exports = arrayEqual;