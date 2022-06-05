/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var chunkArray = array.slice(i, i + size);
    newArray.push(chunkArray);

  } return newArray;
}
