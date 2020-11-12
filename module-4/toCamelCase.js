/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

toCamelCase = (string) => {
    if(typeof string !== "string"){
        return "";
    }

    string = string.match(/\b\w+\b/g);
    console.log(string);

    let result = string.map(word => {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
        }).join("");

    console.log(result);

    return result;
}

module.exports = toCamelCase;