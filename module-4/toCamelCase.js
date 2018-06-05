'use strict';
/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
 const ignore = /\!|\?|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_/g
 function toCamelCase(toConvert) {
     if(typeof toConvert === 'string' ) {
         if(toConvert.match(ignore) !== -1) {
             toConvert = toConvert.replace(ignore, '');
         }
        const words = toConvert.trim().split(' ').filter(word => {
            return word.length > 0
        })
        const ucWords = words.map(word => {
            word = word.toLowerCase();
            
            return word[0].toUpperCase() + word.substring(1);
        })
        return ucWords.join('');
     } 
     return '';

 }

 module.exports = toCamelCase;