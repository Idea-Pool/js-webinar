const ROMAN_TABLE = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "M": 500,
    "D": 1000,
}

/**
 * It recieves a Roman number (as string)
 * and converts it to it's Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

function romanToDec(roman) {
    let number = 0;
    let next = 0;
    let curr = 0;

    if (typeof roman !== "string") {
        throw new Error("Invalid input datatype");
    };
    if (roman.length > roman.split("").filter(element => { return Object.keys(ROMAN_TABLE).includes(element)}).length) {
        throw new Error("Invalid character in input");  
    }
    for (let i = 0; i < roman.length; i++) {
        curr = ROMAN_TABLE[roman.charAt(i)];
        next = ROMAN_TABLE[roman.charAt(i + 1)];
        if (next === undefined) {
            number += curr;
            continue;
        }
        if(curr >= next) {
            number +=curr;
            continue;
        }
        number -= curr;
        
    };
    return number;
};

module.exports = romanToDec;
