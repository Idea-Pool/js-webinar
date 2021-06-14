/**
 * It recieves a Roman number (as string)
 * and converts it to it's Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */
let rules = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};
function getArabicValue(symbolsOfRoman, index) {
    let valueRoman = symbolsOfRoman[index];
    if (rules[valueRoman] !== undefined) {
        return rules[valueRoman];
    }
    else throw new Error(`Invalid symbol in input ${valueRoman}`);
}
function romanToDec(roman) {
    if (typeof (roman) === "string") {
        let symbolsOfRoman = roman.split("");
        let result = 0;
        for (let index = 0; index < symbolsOfRoman.length - 1; index++) {
            let valueArabic = getArabicValue(symbolsOfRoman, index);
            let valueArabicNext = getArabicValue(symbolsOfRoman, index + 1);
            result = (valueArabic < valueArabicNext) ? result -= valueArabic : result += valueArabic;
        }
        return result + rules[symbolsOfRoman[symbolsOfRoman.length - 1]];
    }
    else throw new Error(`Invalid input ${roman}`);
}
module.exports = romanToDec;