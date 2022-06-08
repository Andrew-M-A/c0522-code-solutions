/* exported take */

function take(array, count) {
  var takeArray = [];
  if (count > array.length) {
    return takeArray;
  }
  for (var i = 0; i < count; i++) {
    takeArray.push(array[i]);
  } return takeArray;
}

/*
1.) define an empty array to hold the new specified indexes
2.) use an if statement to check if the count parameter is greater than the length of the array
3.) if it is, return the empty array (edge case)
4.) use a for loop that runs as long as "i" is less than the count parameter
5.) as long as it is, push the values of array at "i" into the array defined in step 1
6.) return the array defined in step 1
*/
