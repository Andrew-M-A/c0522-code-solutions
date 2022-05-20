/* exported tail */

function tail(array) {
  var tailEnd = [];
  for (var i = 0; i < array.length - 1; i++) {
    tailEnd.push(array[i + 1]);
  }
  return tailEnd;
}
