/* exported dropRight */
function dropRight(array, count) {
  var dropArray = [];
  for (var i = 0; i < array.length - count; i++) {
    dropArray.push(array[i]);
  } return dropArray;
}
