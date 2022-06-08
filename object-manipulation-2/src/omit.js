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

/*
1.) define an empty object literal to hold the new values
2.) loop thorugh the properties of source
3.) loop through the length of the keys array
4.) check if the property of source is not equal to the value of keys at "i"
5.) if it isn't, set the property of the object defined in step 1, to the property of source
6.) delete the key-values that are to be omitted
7.) return the object defined in step 1
*/
