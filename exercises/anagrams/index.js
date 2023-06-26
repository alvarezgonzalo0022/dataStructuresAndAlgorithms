// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);
  
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
      return false;
    }
  
    for (let char in aCharMap) {
      if (aCharMap[char] !== bCharMap[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  const buildCharMap = (str) => {
    const charMap = {};
  
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1;
    }
  
    return charMap;
  }

module.exports = anagrams;

// const string1 = stringA.replace(/[^\w]/g, "").toLowerCase();
// const string2 = stringB.replace(/[^\w]/g, "").toLowerCase();

// if(string1.length !== string2.length) return false;

// let letters1 = {};
// let letters2 = {};

// for (const char of string1) {
//     letters1[char] = letters1[char] + 1 || 1;
// }
// for (const char of string2) {
//     letters2[char] = letters2[char] + 1 || 1;
// }

// for (const char of Object.keys(letters1)) {
//     if(!letters2[char] || letters1[char] !== letters2[char]) return false
// }
// return true;

// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
//   }
  
//   function cleanString(str) {
//     return str
//       .replace(/[^\w]/g, '')
//       .toLowerCase()
//       .split('')
//       .sort()
//       .join('');
//   }