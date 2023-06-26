// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowels = {
        a: 'a',
        e: 'e',
        i: 'i',
        o: 'o',
        u: 'u'
    }

    let amount = 0;

    for (const char of str.toLowerCase()) {
        vowels[char] && amount++;
    }

    return amount;
}

module.exports = vowels;

// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//
//   return count;
// }

// const matches = str.match(/[aeiou]/gi);
// return matches ? matches.length : 0;
