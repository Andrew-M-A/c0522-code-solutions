/* exported tail */

function tail(array) {
  var tailEnd = [];
  for (var i = 1; i < array.length; i++) {
    tailEnd.push(array[i]);
  }
  return tailEnd;
}

/*
  1.) define a function with one parameter which is an array...
  which returns every element AFTER the first
  2.) assign an empty array to a variable to return after
  3.) use a for loop to iterate through the parameter array
      and push the parameter array at initialization variable into
      the empty array
  4.) return the array defined in step 1
*/
