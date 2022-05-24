/* exported capitalize */

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

/* a function that returns the word parameter with the first character capitalized and the rest lowercase

1.) define a function named "capitalize" that takes in one parameter "word" which is a single word JavaScript String
2.) call the toUpperCase method of the word object at index[0] ... this will select the first letter of word and capitalize it
3.) concatenate the previous expression with the */
