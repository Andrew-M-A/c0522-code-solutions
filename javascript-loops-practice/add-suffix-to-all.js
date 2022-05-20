/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var wordLy = [];
  var newWord;
  for (var i = 0; i < words.length; i++) {
    newWord = words[i] + suffix;
    wordLy.push(newWord);
  }
  return wordLy;
}
