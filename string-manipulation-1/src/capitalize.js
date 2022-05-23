/* exported capitalize */

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

/* 1.) take the first letter of our parameter (@ 0)and capitalize it with the toUpperaCase method
 2.) concatenate that with the rest of the parameter by using the slice method at the next letter (@ 1) and then toLowerCase that */
