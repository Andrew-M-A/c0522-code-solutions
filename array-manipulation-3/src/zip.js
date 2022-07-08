/* exported zip */

// intialize a variable with a value of an empty array to hold zipped array
// intialize a variable to standardize lengths
// use an if statement to assign the shorter of each parameter length to the variable in step 2
// use a for loop with the condition that i < than standardized length (defined in step 2, 3)
// within the loop, define an array on each iteration to hold the index pairs
// on each iteration, push first[i] and second[i] into the array defined in the previous step and
//  push that array into the zippedArray from step 1
// return the zippedArray from the function

function zip(first, second) {

  var zippedArray = [];
  let equalLength;

  if (first.length <= second.length) {
    equalLength = first.length;
  } else {
    equalLength = second.length;
  }

  for (var i = 0; i < equalLength; i++) {
    var pairedArray = [];
    pairedArray.push(first[i]);
    pairedArray.push(second[i]);
    zippedArray.push(pairedArray);
  }
  return zippedArray;
}
