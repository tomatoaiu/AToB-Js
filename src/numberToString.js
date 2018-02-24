/**
 * A module for number to string.
 * @module number-to-string
 */


/**
 * Number to String
 * @param {String} number 
 * @returns {String} number of string
 */
export default function numberToString(num = ''){
    const str = String(num);
    if(str && typeof str === 'string') return str;
    else return ``;
};