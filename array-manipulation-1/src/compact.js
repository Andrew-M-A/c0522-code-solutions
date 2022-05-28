/* exported compact */

function compact(array) {

  var trueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      trueArray.push(array[i]);
    }
  }
  return trueArray;
}

/*
  1.) define a function with one parameter, which is an array
  2.) assign an empty array literal for our return value
  3.) use a for loop to iterate through the parameter
  4.) within the for loop code block, use an if statement that checks if
      the parameter at i is valid, and if it is, push that array into the empty array
  5.) return the empty array
*/
