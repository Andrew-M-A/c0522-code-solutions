/* exported filterOutNulls */

function filterOutNulls(values) {
  var nullLess = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      nullLess.push(values[i]);
    }
  } return nullLess;
}
