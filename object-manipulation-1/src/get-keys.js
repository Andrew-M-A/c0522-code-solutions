/* exported getKeys */

function getKeys(object) {

  var propArray = [];
  for (var key in object) {
    propArray.push(key);
  }
  return propArray;
}

/*
1.) define a function with one parameter, which is an object
2.) assign an empty array to a variable to hold the values of the parameter
3.) use a for-in loop to extract the properties of the parameter
4.) push the properties into the empty array defined in step 1
5.) return the array
*/
