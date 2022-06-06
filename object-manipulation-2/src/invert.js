/* exported invert */

function invert(source) {
  var invertedObj = {};
  for (var property in source) {
    invertedObj[source[property]] = property;
  }
  return invertedObj;
}
