// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split('').reverse().join('');
}
reverse('asdf')

module.exports = reverse;


// let reversedStr = '';

// for(let character of str) {
//     reversedStr = character + reversedStr;
// }
// return reversedStr;

// return str.split('').reduce((reversedStr, character) => character + reversedStr, '');