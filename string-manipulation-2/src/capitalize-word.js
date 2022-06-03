/* exported capitalizeWord */

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

/*
1.) check if the word parameter is strictly equal to 'javascript' lowercased
2.) if it is, return 'JavaScript' with propert capitalization
3.) capitalize the first letter of the word parameter and add that to...
4.) the rest of the word parameter lower cased
5.) return the result of that expression
*/
