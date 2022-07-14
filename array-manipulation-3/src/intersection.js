/* exported intersection */

// define an empty array to hold new values
// loop through the first array
// check if it's values are included in the second array
// if they are, push them into the array defined in step 1
// return the array defined in step 1

function intersection(first, second) {
  const simArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      simArray.push(first[i]);
    }
  }
  return simArray;
}
