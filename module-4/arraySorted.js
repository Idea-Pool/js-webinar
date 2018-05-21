'use strict';
/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {Array.<string>} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */

const ignore = /\ |\!|\?|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_/g

 function arraySorted(items) {
     let result = true;
     if (items.length === 0) {
         return true;
     }
     let trimmedArray = items.map(function (n) {
         if (typeof n === "string") {
            if(n.match(ignore) !== -1) {
               return n = n.replace(ignore, '').toLowerCase();
            }
            return n.toLowerCase();
         } 
         return n;
    });
    let expected = trimmedArray.slice(0).sort();
    
    expected.forEach((element, index) => {
       if(element !== trimmedArray[index]) {
           result = false;
       }
    });
    return result;
 }

 module.exports = arraySorted;