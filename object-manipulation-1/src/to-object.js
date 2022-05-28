/* exported toObject */
function toObject(keyValuePair) {

  var newObj = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];

  newObj[key] = value;
  return newObj;
}

/*
  1.) define a function with one parameter, which is an array
  containing two elements, a String key and any other JavaScript value
  2.) The function returns an Object with one property consisting of the key-value pair
  3.) define an empty object literal to hold the key-value pair
  4.) get the first value of the key-value pair and assign that to a variable
  5.) get the second value of the key-value pair and assign that to a variable
  6.) use braket notation with the empty object and first variable of the key-value pair...
      and assign the second value of the key-value pair to it
  7.) return the result of that expression
*/
