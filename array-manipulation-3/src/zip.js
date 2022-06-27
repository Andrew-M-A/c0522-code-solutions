/* exported zip */

function zip(first, second) {
  var testArray = [];
  first.splice(1, 0, second[0]);
  testArray.push(first);
  return testArray;
}
