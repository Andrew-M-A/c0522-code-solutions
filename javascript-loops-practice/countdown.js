/* exported countdown */

function countdown(number) {
  var count = [];
  for (var i = 0; i <= number; i++) {
    count.push(number - i);
  }
  return count;
}
