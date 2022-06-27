/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var chunkArray = array.slice(i, i + size);
    newArray.push(chunkArray);
  }
  return newArray;
}

/*
1.) assign an empty array to a variable
2.) loop through the array parameter
    have the final expression increment by "size" (this will ensure the next loops get the remaining indexes)
3.) slice off indexes of the parameter array starting at "i" and ending at "i + size" (the chunk)
    - assign the result of that expression to another array
4.) push the array holding the chunk into the empty array defined in step 1
5.) return the array defined in step 1
*/
