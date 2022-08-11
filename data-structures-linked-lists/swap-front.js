/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  } else {
    var swap = list.next.data;
    list.next.data = list.data;
    list.data = swap;
  }
  return list;
}
