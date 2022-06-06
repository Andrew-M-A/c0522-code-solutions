/* exported pick */
function pick(source, keys) {
  var pickObj = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      pickObj[keys[i]] = source[keys[i]];
    }
  } return pickObj;
}
