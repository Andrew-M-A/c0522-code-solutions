/* exported difference */

// define an empty array to hold the unique values
// loop through the first array
// check if the values within the first array are in the second array
// if they aren't, push the first array values into the empty array
// loop through the second array
// check if the values exist in the first array
// if not, push the second values into the array from step 1
// return the array defined in step 1

function difference(first, second) {
  const diffArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      diffArray.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    if (!first.includes(second[k])) {
      diffArray.push(second[k]);
    }
  }
  return diffArray;
}
