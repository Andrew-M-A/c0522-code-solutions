/* exported ransomCase */
function ransomCase(string) {
  var ransomWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomWord += string[i].toLowerCase();
    } else {
      ransomWord += string[i].toUpperCase();
    }
  }
  return ransomWord;
}

/*
1.) define a variable and assign it an empty string to hold the ransomCased string
2.) use a for loop to loop through each letter
3.)
*/
