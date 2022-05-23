/* exported reverse */

function reverse(array) {
  var backwards = [];
  for (var i = array.length - 1; i >= 0; i--) {
    backwards.push(array[i]);
  }
  return backwards;
}

/* 1.) assign an empty array to a variable
2.) use a for loop with an initialization of i = array.length,
a conditon of i >= 0, and then decrement i
3.) call the push method of the empty array variable with an arguemtn of array[i]
4.) return the empty array variable */
