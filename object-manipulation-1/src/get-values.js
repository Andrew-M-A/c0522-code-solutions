/* exported getValues */

function getValues(object) {
  var valuesArray = [];

  for (var key in object) {
    valuesArray.push(object[key]);
  }
  return valuesArray;
}

/*
  1.) define a function with one parameter, object, which is any JavaScript object
      that gets the values of the parameter and returns them in an array
  2.) define an empty array literal to push the values into
  3.) use a for-in loop to get the properties of the object
  4.) during each loop, push those properties into the array defined on line 1
  5.) return the array
*/
