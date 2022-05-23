/* exported getKeys */

function getKeys(object) {

  var propArray = [];
  for (var key in object) {
    propArray.push(key);
  }
  return propArray;
}

/* 1.) assign an empty array literal to a variable, propArray
   2.) use a for-in loop with a variable key in object
   3.)call the push method of the propArray array with an argument of key
   4.) return propArray */
