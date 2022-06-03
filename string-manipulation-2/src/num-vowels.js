/* exported numVowels */

function numVowels(string) {
  var vowelCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A' ||
        string[i] === 'e' || string[i] === 'E' ||
        string[i] === 'i' || string[i] === 'I' ||
        string[i] === 'o' || string[i] === 'O' ||
        string[i] === 'u' || string[i] === 'U') {
      vowelCount++;
    }
  } return vowelCount;
}

/*
1.) define a variable to keep count of vowels
2.) loop through the string to check each letter of the string
3.) use a conditional to check if each letter is equal to a vowel,
    upper AND lower cased
4.) if the letter is equal to a vowel, increment the variable defined in step 1
5.) return the variable defined in step 1
*/
