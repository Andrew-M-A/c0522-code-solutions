/* exported getKeys */

function getKeys(object) {

  var propArray = [];
  for (var key in object) {
    propArray.push(key);
  }
  return propArray;
}

/* create a new array to hold the keys
   use a for-in loop to get the keys in the object
   use the push method of the new array...
   and pass the variable from the for-in loop as an argument
   return the new array */
