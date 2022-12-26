// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

// version 1
// function isPangram(sentence) {
//   let lowerCased = sentence.toLowerCase();
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   for (const char of alphabet) {
//     if (lowerCased.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// version 2
function isPangram(sentence) {
  let lowerCased = sentence.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (const char of alphabet) {
    if (!lowerCased.includes(char)) {
      return false;
    }
  }
  return true;
}
