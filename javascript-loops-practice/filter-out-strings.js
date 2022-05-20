/* exported filterOutStrings */

function filterOutStrings(values) {
  var noStringAttached = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) !== 'string') {
      noStringAttached.push(values[i]);
    }
  } return noStringAttached;
}
