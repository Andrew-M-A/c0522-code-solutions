/* exported invert */

function invert(source) {
  var invertedObj = {};
  for (var property in source) {
    invertedObj[source[property]] = property;
  }
  return invertedObj;
}

/*
1.) assign an empty object literal to a variable
2.) use a for-in loop to get the properties of source
3.) create new properties on the object defined in step 1 with keys (names) of "source's" values
4.) assign the properties of "source" to those new properties
5.) return the object defined in step 1
*/
