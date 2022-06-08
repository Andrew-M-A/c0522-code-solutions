/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var swapString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapString += string[secondIndex];
    } else if (i === secondIndex) {
      swapString += string[firstIndex];
    } else {
      swapString += string[i];
    }
  }
  return swapString;
}

/*
1.) define a variable with a value of an empty string
2.) use a for loop to loop through each letter of string
3.) use an if statement to check if "i" is strictly equal to the value of firstIndex
4.) if it is, add and reassign string at the secondIndex (SWAPPING) to the variable from step 1
5.) then check if "i" is strictly equal to the value of secondIndex
6.) if it is, add and reassign string at the firstIndex to the variable from step 1
7.) otherwise, just add and reassign string at "i" to the variable from step 1
8.) return the variable from step 1
*/
