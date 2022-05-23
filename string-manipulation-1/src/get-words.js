/* exported getWords */

function getWords(string) {
  var empty = [];
  var splits = string.split(' ');
  if (string === '') {
    return empty;
  } return splits;
}

/* a function that takes in a string containing zero or more words,
 separated by spaces as a parameter
and returns the string in an array, with each value being a word from the parameter

1.) assign an empty array literal to a variable
2.) call the split method on the string parameter with an argument of (' ') and assign that to a variable
3.) use an if statement with the condition that if
'string' parameter === an empty string (''), return the array
4.) else, return the variable that string.split was assigned to
 */
