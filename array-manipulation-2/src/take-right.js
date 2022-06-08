/* exported takeRight */
function takeRight(array, count) {
  var rightArray = [];
  if (count > array.length) {
    return array;
  } for (var i = array.length - count; i < array.length; i++) {
    rightArray.push(array[i]);
  } return rightArray;
}

/*
1.) define an empty array to hold the new values
2.) use an if statement that checks if count is greater than the length of the array
3.) if it is, return array (this is our edge case)
4.) use a for loop that starts at array.length minus count
5.) as long as it is, push the values of array at "i" into the array defined in step 1
6.) return the array defined in step 1
*/
