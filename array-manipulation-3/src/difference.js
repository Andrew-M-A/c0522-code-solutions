/* exported difference */

function difference(first, second) {
  var asymmetry = [];
  for (var i = 0; i < first.length; i++) {
    for (var k = 0; k < second.length; k++) {
      if (!second.includes(first[i])) {
        asymmetry.push(first[i]);
      }
    }
  }
  return asymmetry;
}
