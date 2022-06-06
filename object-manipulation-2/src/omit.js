/* exported omit */
function omit(source, keys) {
  var omitObj = {};
  for (var property in source) {
    for (var i = 0; i < keys.length; i++) {
      if (property !== keys[i]) {
        omitObj[property] = source[property];
      }
      delete omitObj[keys[i]];
    }
  }
  return omitObj;
}
