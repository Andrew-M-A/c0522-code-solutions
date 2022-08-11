/* exported getTail */

function getTail(list) {
  let tailList = list;
  while (tailList.next !== null) {
    tailList = tailList.next;
  }
  return tailList.data;
}
