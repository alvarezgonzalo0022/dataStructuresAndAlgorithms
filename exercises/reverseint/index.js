// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;


// const reversedNumber = n.toString().split('').reverse();

// let output = '';

// for(let i = 0; i < reversedNumber.length; i++) {
//     if(reversedNumber[i] !== '0') {
//         output += reversedNumber[i];
//     } 
// }

// if(Math.sign(n) === -1) {
//     output = parseInt(`-${parseInt(output)}`);
// }
// else {
//     output = parseInt(output)
// }

// return n === 0 ? 0 : output;
