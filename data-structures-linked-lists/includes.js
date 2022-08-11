/* exported includes */

function includes(list, value) {
  let match = list;
  while (match !== null) {
    if (match.data === value) {
      return true;
    }
    match = match.next;
  }
  return false;
}
