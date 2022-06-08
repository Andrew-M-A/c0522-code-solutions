/* exported capitalizeWords */

function capitalizeWords(string) {
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(' ');
}

/*
1.) split each string up into single words
2.) use a for loop to find the first letter of each word and capitalize it
3.) lower case the rest of the word
4.) re-join the words with a space and return the result of that expression
*/
