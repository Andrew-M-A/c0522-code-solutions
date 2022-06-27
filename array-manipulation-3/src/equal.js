/* exported equal */

// loop through both arrays
// define a variable to hold boolean value
// if the index-n of the first is NOT equal to the second, assign false to variable
// else assign true to variable

function equal(first, second) {

  var equalityCheck = true;

  for (var i = 0; i < first.length; i++) {
    for (var k = 0; k < second.length; k++) {
      if (first[i] !== second[k]) {
        equalityCheck = false;
      } else {
        equalityCheck = true;
      }
    }
  }
  return equalityCheck;
}
