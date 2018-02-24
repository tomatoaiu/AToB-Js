/**
 * A module for string to number.
 * @module string-to-number
 */


/**
 * String to Number
 * @param {String} str 
 * @returns {(Number|String)} string of number | error ``
 */
export default function stringToNumber(str = '') {
    const num = Number(str);
    if(num && typeof num === 'number' || num === 0) return num;
    else return ``;
};