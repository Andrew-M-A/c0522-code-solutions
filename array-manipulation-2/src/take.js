/* exported take */

function take(array, count) {
  var takeArray = [];
  if (count > array.length) {
    return takeArray;
  }
  for (var i = 0; i < count; i++) {
    takeArray.push(array[i]);
  } return takeArray;
}

/*
1.) define an empty array to hold the new specified indexes
2.) return the empty array if count is longer than the length of the array parameter
*/
