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
         console.warn(`The length of the 2 arrays are not the same! First "${first.length}" and second: "${second.length}"!`);
     } else {
         return first.every((value, index) => {
             if(value === second[index]) {
                return value === second[index];
             } else {
                console.warn(`The 2 elements on same index are not the same! First: "${value}" and second: "${second[index]}"!`);
             }
         });
     }
     return false;
 }

 module.exports = arrayEqual;