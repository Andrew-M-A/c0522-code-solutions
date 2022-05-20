/* exported initial */

function initial(array) {
  var firstIndexes = [];
  for (var i = 1; i < array.length; i++) {
    firstIndexes.push(array[i - 1]);
  }
  return firstIndexes;
}

// define a function, "initial", that passes one parameter, "array"

// create a "for" loop and initialize a variable "i" with a value of 1

// set a condition of "i" being less than the length of the "array" parameter

// increment "i" by 1

// in the code block of the "for" loop, push the value of array at i-1 into the "firstIndexes" array

// return firstIndexes;
