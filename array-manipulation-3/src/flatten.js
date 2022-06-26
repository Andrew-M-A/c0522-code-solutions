/* exported flatten */

// loop through the array parameter
// if the value of its index is an array,
//  - loop through that array and push its values into the empty array
// if its not an array, also push that value into the empty array
// return the new array

function flatten(array) {
  var flatArray = [];
  for (var i = 0; i < array.length; i++) {
    var check = array[i];
    if (Array.isArray(check) === true) {
      for (var k = 0; k < check.length; k++) {
        flatArray.push(check[k]);
      }
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
}
