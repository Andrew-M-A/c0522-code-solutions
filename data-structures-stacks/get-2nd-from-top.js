/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  var temp = stack.pop();
  if (temp !== undefined) {
    var second = stack.peek();
    stack.push(temp);
    return second;
  }
}
