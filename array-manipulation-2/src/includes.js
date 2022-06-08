/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}

/*
1.) use a for loop to loop through the values of the array
2.) if the value of array at "i" is equal to the value parameter, return true
3.) if not, return false
*/
