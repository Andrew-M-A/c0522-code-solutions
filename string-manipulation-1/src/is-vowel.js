/* exported isVowel */

function isVowel(character) {
  if (
    character === 'a' || character === 'A' ||
  character === 'e' || character === 'E' ||
  character === 'i' || character === 'I' ||
  character === 'o' || character === 'O' ||
  character === 'u' || character === 'U') {
    return true;
  }
  return false;
}

/*
  1.) define a function that takes in one parameter which is a single character string
  2.) check if the parameter is equal to a vowel... both upper and lower case
  3.) if it is, return true
  2.) if it isn't, return false
*/
