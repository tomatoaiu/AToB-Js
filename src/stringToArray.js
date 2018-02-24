/**
 * A module for string to array.
 * @module string-to-array
 */


/**
 * String to Array
 * @param {String} str 
 * @param {String} separate 
 * @returns {Array} 
 */
export default function stringToArray(str = '', separate = '') {
    const arr = str.split(separate);
    if(arr && Array.isArray(arr)) return arr;
    else return [];
};