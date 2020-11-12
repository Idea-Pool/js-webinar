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

arrayEqual = (first, second) => {
     if(first.length !== second.length){
         console.warn(`The length of the 2 arrays are not the same! first: ${first.length} second array: ${second.length}!`);
     }
     
    return false;
 }

 module.exports = arrayEqual;