/**
 * It recieves a Roman number (as string)
 * and converts it to it's Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

charValue = (char) => {
    switch(char) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
        default:
            return 0;
    }
}

 romanToDec = (roman) => {
    if (typeof roman !== "string"){
        return "";
    }

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        let char1 = charValue(roman[i].toUpperCase());

        if (i + 1 < roman.length) {
            let char2 = charValue(roman[i + 1].toUpperCase());
            if (char1 >= char2) {
                result += char1;
                //console.log("Test 1 -->" + result);
            } else {
                result += (char2 - char1);
                i++;
                //console.log("Test 2 -->" + result);
            }
        } else {
            result += char1;
            //sconsole.log("Test 3 -->" + result);
        }
    }
    return result;
 }

 module.exports = romanToDec;