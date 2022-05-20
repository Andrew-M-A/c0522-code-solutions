/* exported compact */

function compact(array) {

  var trueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      trueArray.push(array[i]);
    }
  }
  return trueArray;
}
