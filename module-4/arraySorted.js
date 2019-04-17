'use strict';

const arrayEqual = require('./arrayEqual');


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

function arraySorted(myArray, ignoreChars) {
    var result;
    var orderedArray
    var originalArray = [...myArray];

    if (typeof ignoreChars !== 'undefined') {
        ignoreChars += ' ';
    } else {
        ignoreChars = ' ';
    }

    var originalArray = myArray.map(function (element) {
        if (typeof element == 'string') {
            return element
                .split('')
                .filter(letter => ignoreChars.indexOf(letter) == -1)
                .join('')
                .toLowerCase()
        }
        else {
            return element
        }
    });

    orderedArray = [...originalArray];
    orderedArray.sort();

    result = JSON.stringify(originalArray) === JSON.stringify(orderedArray);

    return result;
}

module.exports = arraySorted