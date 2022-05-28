/* exported reverse */

function reverse(array) {
  var backwards = [];
  for (var i = array.length - 1; i >= 0; i--) {
    backwards.push(array[i]);
  }
  return backwards;
}

/*
  1.) define a function with one parameter which is an array
  2.) assign an empty array to a variable
  3.) use a for loop to iterate through the array
        - STARTING at the end of the array
        - as long as i (or whatever variable initialized)
          is greater than or equal to 0 (since first index begins at 0),
            -push the value of array at i into the empty array
        - decrement i after every loop
  4.) return the empty array
*/
