/* exported pick */
function pick(source, keys) {
  var pickObj = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      pickObj[keys[i]] = source[keys[i]];
    }
  } return pickObj;
}

/*
1.) define an empty object literal to hold the new values
2.) loop through the keys array
3.) use an if statement that checks if the value of "source" at "keys" at "i" is not undefined
4.) if it isn't, assign the value of "source" at "keys" at "i" to the empty object at "keys" at "i"
5.) return the object defined in step 1
*/
