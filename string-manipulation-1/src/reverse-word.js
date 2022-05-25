/* exported reverseWord */

function reverseWord(word) {
  var backWords = '';
  for (var i = word.length - 1; i >= 0; i--) {
    backWords += word[i];
  }
  return backWords;
}

/* 1.) assign an empty string to a variable
2.) use a for loop, assign your initialization variable to a value of parameter.length, make the condition initialization variable >= 0, and then decrement the variable for the final expression
3.) in the condition block, use the addition-assignment operator on the parameter[i] and add-assign that to the empty strig variable
4.) return the empty string variable */
