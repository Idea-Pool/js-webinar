'use strict';
/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

 function arraySum(elements) {
     var result = 0;
     if (elements.length === 0 || typeof elements !== "object") {
        return 0;
     } 
     elements.forEach(element => {
         if(typeof element === "number") {
             result = result + element;
         } else if (typeof element === "object"){
             result = result + arraySum(element)
         }
        
     });
    return result;   
 }

 module.exports = arraySum;