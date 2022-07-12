/* exported equal */

// check to see if the length of the first and second array are equal
// if they are not, return false
// if they are, loop through the first array
// check if first at "i" is equal to second at "i"
// if it isn't return false
// else, return true from the function

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
  }
  return true;
}
