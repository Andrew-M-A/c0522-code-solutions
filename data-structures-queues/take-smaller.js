/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.dequeue();
  const second = queue.peek();
  if (typeof second === 'undefined') {
    return first;
  } else if (first < second) {
    queue.dequeue(first);
    queue.enqueue(second);
    return first;
  } else {
    queue.dequeue(second);
    queue.enqueue(first);
    return second;
  }
}
