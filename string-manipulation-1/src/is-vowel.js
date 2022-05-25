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
  1.)use an if statement with the condition
  if the parameter is equal to 'a' or 'A' or 'e' or 'E'
  'i' or 'I' or 'o' or 'O' or 'u' or 'U' ,
  return true
  2.) else, return false */
