// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let letters = {};
    let maxValue = 0;
    let output;
    
    for(let i = 0; i < str.length; i++) {
        if(letters[str[i]] === undefined) {
            letters[str[i]] = 1;
        }
        else {
            letters[str[i]] += 1;
        }
    }

    for(let i = 0; i < Object.keys(letters).length; i++) {
        if(letters[Object.keys(letters)[i]] > maxValue) {
            maxValue = letters[Object.keys(letters)[i]]
            output = Object.keys(letters)[i];
        }
    }

    return output;
}

module.exports = maxChar;

// const charMap = {};
// let max = 0;
// let maxChar = '';

// for (let char of str) {
//   if (charMap[char]) {
//     charMap[char]++;
//   } else {
//     charMap[char] = 1;
//   }
// }

// for (let char in charMap) {
//   if (charMap[char] > max) {
//     max = charMap[char];
//     maxChar = char;
//   }
// }

// return maxChar;
