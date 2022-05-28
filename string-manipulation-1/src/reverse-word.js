/* exported reverseWord */

function reverseWord(word) {
  var backWords = '';
  for (var i = word.length - 1; i >= 0; i--) {
    backWords += word[i];
  }
  return backWords;
}

/*
    1.) define a function that takes in one parameter, word, which is a single JavaScript String
    2.) assign an empty string to a variable
    3.) loop through the parameter with a for loop that starts at the last index of the parameter...
    and does so as long as i (the initialization variable) is greater than or equal to 0
    4.) concatenate and assign the parameter at index i to the empty string variable every loop
    5.) decrement i after every loop
    6.) return the empty string variable
*/
