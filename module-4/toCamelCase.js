/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
const ALLOWED_CHARACTERS = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
function toCamelCase(toConvert) {
    if (typeof (toConvert) === "string") {
        let words = toConvert.split(/\s+/).filter(word => word !== '');
        for (let i = 0; i < words.length; i++) {
            let wordSymbols = words[i].split("").filter((wordSymbol) => ALLOWED_CHARACTERS.includes(wordSymbol));
            if (i === 0 && ALLOWED_CHARACTERS.includes(wordSymbols[0])) {
                wordSymbols[0] = wordSymbols[0].toLowerCase();
            }
            else {
                if (ALLOWED_CHARACTERS.includes(wordSymbols[0])) {
                    wordSymbols[0] = wordSymbols[0].toUpperCase();
                }
            }
            words[i] = wordSymbols.join("");
        }
        return words.join("");
    }
    else {
        return '';
    }
}

module.exports = toCamelCase;