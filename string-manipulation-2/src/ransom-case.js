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
3.) use an if statement that checks if "i" is divisble by 2
4.) if it is, lowerCase that letter at "i" and then add and reassign it to the variable defined in step 1
5.) if it isn't, upperCase that letter at "i" and then add and reassign it to the variable defined in step 1
6.) return the variable defined in step 1
*/
