/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

 //const ALLOWED_CHARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789"

toCamelCase = (toConvert) => {
    if (typeof toConvert !== "string"){
        return "";
    }

    toConvert = toConvert.match(/\b\w+\b/g);
    let firstWord = toConvert[0].toLowerCase();
    otherWords = toConvert.splice(1);

    let result = firstWord.concat(otherWords.map((word) => {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
        }).join(""));

    return result;
}

/* toCamelCase = (toConvert) => {
    if(typeof toConvert !== "string"){
        return "";
    }

    return toConvert
        .split(" ")
        .map(word => {
            return word.split("").filter(c => {
                return ALLOWED_CHARACTERS.includes(c.toLowerCase());
                }).join("");
        })
        .filter(Boolean) // word => word !== ""
        .map((word, i) => {
            if (i === 0) {
                return word.toLowerCase();
            }
            return word[0].toUpperCase() + word.substring(1).toLowerCase();
        })
        .join("");
} */


module.exports = toCamelCase;