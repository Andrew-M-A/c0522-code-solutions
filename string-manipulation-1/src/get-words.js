/* exported getWords */

function getWords(string) {
  var empty = [];
  var splits = string.split(' ');
  if (string === '') {
    return empty;
  }
  return splits;
}

/* a function that takes in a string containing zero or more words,
 separated by spaces as a parameter
and returns the string in an array, with each value being a word from the parameter

1.) define a function named getWords that takes one parameter "string", that is any JavaScript String
2.) assign an empty array literal to a variable in case the string is empty
3.) call the split method on the string parameter with an argument of (' ') and assign that to a variable
4.) use an if statement with the condition that checks if the string is strictly equal to an empty string ''
5.) if it is, return the empty array literal
5.) else, return the variable that string.split was assigned to

*/
