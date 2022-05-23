/* exported toObject */
function toObject(keyValuePair) {

  var newObj = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];

  newObj[key] = value;
  return newObj;
}

/* create an object literal to hold the keyValuePair
   create a variable that assigns keyValuePair[0] to it
   create a variable that assigns keyValuePair[1] to it
   return the variable that the object literal was assigned to */
