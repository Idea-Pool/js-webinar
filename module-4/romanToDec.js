/**
 * It receives a Roman number (as string)
 * and converts it to it's Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */
function romanToDec(roman) {
    let validRomans = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let regexp = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;
    let result = 0;
    if (typeof roman !== 'string') throw new Error('Input is not a string');
    if (!regexp.test(roman) || !roman) throw new Error('Input is not a valid Roman numeral');
    for (const char of roman) {
        if (validRomans[roman[roman.indexOf(char) + 1]] > validRomans[char]) {
            result -= validRomans[char];
        } else result += validRomans[char];
    }
    return result;
}

module.exports = romanToDec;