/* exported capitalize */

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

/* a function that returns the parameter, "word", with the first character capitalized and the rest lowercase

1.) define a function named "capitalize" that takes in one parameter "word" which is a single word JavaScript String
2.) access the first letter of the parameter and capitalize it
3.) extract the rest of the parameter (index 1 and so on) and lower case it
4.) concatenate the step 2 with the previous step and return the result of that expression

*/
