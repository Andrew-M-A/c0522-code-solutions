/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let count = 0;
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  }
  while (count !== index) {
    const check = queue.dequeue();
    const next = queue.peek();
    if (typeof next === 'undefined') {
      return check;
    } else {
      queue.enqueue(check);
      count++;
    }
  }
  return queue.dequeue();
}
