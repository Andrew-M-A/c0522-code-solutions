/* exported dropRight */
function dropRight(array, count) {
  var dropArray = [];
  for (var i = 0; i < array.length - count; i++) {
    dropArray.push(array[i]);
  } return dropArray;
}

/*
1.) define an empty array to hold the new values
2.) loop through the array parameter as long as "i" is less than array.length MINUS count
3.) push the values of the parameter at "i" into the empty array
4.) return the array defined in step 1
*/
