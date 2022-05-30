/* exported initial */

function initial(array) {
  var firstIndexes = [];
  for (var i = 0; i < array.length - 1; i++) {
    firstIndexes.push(array[i]);
  }
  return firstIndexes;
}

/*
  1.) define a function that takes in one parameter which is an array and returns every element but the last one
  2.) assign an empty array to a variable to return after
  3.) use a for loop that loops through the parameter array but NOT the last index
  4.) push the result of the parameter array at i (or whatever variable initialized in the for loop) into the empty array
  5.) return the empty array
*/
