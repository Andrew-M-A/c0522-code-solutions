/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  } else if (typeof queue.peek() !== 'undefined') {
    let first = queue.dequeue();
    if (typeof queue.peek() === 'undefined') {
      return first;
    } if (first <= queue.peek()) {
      return first;
    } while (queue.peek() <= first) {
      queue.enqueue(first);
      first = queue.dequeue();
      if (first <= queue.peek()) {
        return first;
      }
    }
  }
}
