/* exported takeRight */
function takeRight(array, count) {
  var rightArray = [];
  if (count > array.length) {
    return array;
  } for (var i = array.length - count; i < array.length; i++) {
    rightArray.push(array[i]);
  } return rightArray;
}
