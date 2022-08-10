/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    let max = stack.peek();
    while (stack.peek() !== undefined) {
      const compare = stack.pop();
      if (max < compare) {
        max = compare;
      }
    }
    return max;
  }
}
