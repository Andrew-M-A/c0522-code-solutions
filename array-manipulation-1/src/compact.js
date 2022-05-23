/* exported compact */

function compact(array) {

  var trueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      trueArray.push(array[i]);
    }
  }
  return trueArray;
}

/* 1.) assign an empty array to a variable
2.) use a for loop with the condition that,
the initialization variable is less than the parameter.length
increment the initialization variable by 1
3.) use an if statement with the conditon (array[i]),
call the push method of the empty array variable with an argument of array[i]
4.) return the empty array */
