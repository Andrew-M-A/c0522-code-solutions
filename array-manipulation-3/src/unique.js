/* exported unique */

// define an empty array to hold the unique values
// loop through the array parameter
// check if the array parameter at "i" exists within the empty array from step 1
// if not, push it into the array from step 1
// return the array from step 1

function unique(array) {
  var uniqueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
