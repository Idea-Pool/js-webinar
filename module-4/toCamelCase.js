const ALLOWED_CHARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789";

/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

function toCamelCase(toConvert) {
    if (typeof (toConvert) !== "string") {
        return "";
    }
    return toConvert
        .split(" ")
        .map(word => word.split("").filter(c => {
            return ALLOWED_CHARACTERS.includes(c.toLowerCase());
        }).join(""))
        .filter(Boolean)
        .map((word, i) => {
            if (!i) {
                return word.toLowerCase();
            }
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
};

module.exports = toCamelCase;
