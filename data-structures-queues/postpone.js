/* exported postpone */

function postpone(queue) {
  const front = queue.dequeue();
  if (typeof front === 'undefined') {
    return;
  }
  return queue.enqueue(front);
}
