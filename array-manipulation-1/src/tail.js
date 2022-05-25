/* exported tail */

function tail(array) {
  var tailEnd = [];
  for (var i = 1; i < array.length; i++) {
    tailEnd.push(array[i]);
  }
  return tailEnd;
}

/*

1.) create a new array literal
2.) create a for loop that iterates through the length of our parameter (array)
3.) since we're returning the values of the array AFTER the first index, push the value of the array at [i + 1]
4.) return the new array

*/
