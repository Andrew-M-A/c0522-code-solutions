/* exported drop */

function drop(array, count) {
  var dropArray = [];
  while (count < array.length) {
    dropArray.push(array[count]);
    count++;
  } return dropArray;
}
