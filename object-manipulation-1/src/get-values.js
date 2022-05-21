/* exported getValues */

function getValues(object) {

  var valuesArray = [];

  for (var key in object) {
    valuesArray.push(object[key]);
  }
  return valuesArray;
}

/* create a new array to hold the property values of the function parameter
   use a for-in loop to iterate through the object properties
   use the push method of the new array and pass object at [] variable used...
   for the for-in loop
   return the new array */
