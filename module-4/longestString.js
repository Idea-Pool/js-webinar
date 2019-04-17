'use strict';
/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */

 function longestString (strings){
    longestString = "";
    if (typeof strings != 'object') return longestString;
    for (let i= 0; i < strings.length; i++){
        if (typeof strings[i] != 'string') continue;
        if (strings[i].length > longestString.length){
            longestString = strings[i];
        }
       if (strings[i].length == longestString.length && strings[i] < longestString || longestString.length == 0)
       {
         longestString = strings[i];
       }
    
         
    }
    return longestString;
 }


 module.exports = longestString;
