/* exported equal */

// loop through both arrays
// if the index-n of the first is NOT equal to the second, return false
// else return true (because they're equal)

function equal(first, second) {

  for (var i = 0; i < first.length; i++) {
    for (var k = 0; k < second.length; k++) {
      if (first[i] !== second[k]) {
        return false;
      }
    }
  }
  return true;
}
