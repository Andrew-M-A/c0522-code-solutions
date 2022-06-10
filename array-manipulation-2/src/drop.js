/* exported drop */

function drop(array, count) {
  var dropArray = [];
  while (count < array.length) {
    dropArray.push(array[count]);
    count++;
  }
  return dropArray;
}

/*
1.) define an empty array to hold the new values
2.) use a while loop that runs for as long as the count parameter is less than the array length
3.) push the array parameter at count into the empty array defined in step 1
4.) return the array defined in step 1
*/
