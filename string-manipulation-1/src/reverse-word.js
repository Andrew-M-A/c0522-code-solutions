/* exported reverseWord */

function reverseWord(word) {
  var backWords = '';
  for (var i = word.length - 1; i >= 0; i--) {
    backWords += word[i];
  } return backWords;
}
