/* exported union */

// define an empty array to hold the unique values
// assign the first array to the array from step 1
// loop through the second array
// check if its values exist in the array from step 1
// if they don't, push its value into the array from step 1
// return the array from step 1

function union(first, second) {
  const unionArr = [];
  for (var i = 0; i < first.length; i++) {
    unionArr.push(first[i]);
  }
  for (var k = 0; k < second.length; k++) {
    if (!unionArr.includes(second[k])) {
      unionArr.push(second[k]);
    }
  }
  return unionArr;
}
