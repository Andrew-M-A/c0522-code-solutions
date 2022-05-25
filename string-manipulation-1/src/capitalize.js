/* exported capitalize */

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

/* a function that returns the parameter, "word", with the first character capitalized and the rest lowercase

1.) define a function named "capitalize" that takes in one parameter "word" which is a single word JavaScript String
2.) call the toUpperCase method of the word object at index[0] ... this will select the first letter of word and capitalize it
3.) call the toLowerCase method and slice method at [1] of the word object...
    this will return the rest of "word" lowercased
4.) concatenate and return the two previous expressions

*/
