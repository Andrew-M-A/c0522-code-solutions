/* exported isEmpty */

function isEmpty(queue) {
  const check = queue.peek();
  if (typeof check === 'undefined') {
    return true;
  } else {
    return false;
  }
}
