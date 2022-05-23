/* exported getValues */

function getValues(object) {

  var valuesArray = [];

  for (var key in object) {
    valuesArray.push(object[key]);
  }
  return valuesArray;
}

/* 1.) assign an empty array literal to a variable, valuesArray
   2.) use a for in loop with a variable key in object
   3.) use the push method of the valuesArray array and pass an arguement of
   object[key]
   4.) return valuesArray */
