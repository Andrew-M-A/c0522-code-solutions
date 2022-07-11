/* exported difference */

// define an empty array to hold the unique values
// loop through the first array
// within that loop, loop through the second array
// check if the values within the first array are in the second
// if they aren't, push into the empty array
// return the array defined in step 1

function difference(first, second) {
  const difArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var k = 0; k < first.length; k++) {
      if (!first.includes(second[k])) {
        difArray.push(first[i]);
      }
    }
  }
  return difArray;
}
