/* exported getKeys */

function getKeys(object) {

  var propArray = [];
  for (var key in object) {
    propArray.push(key);
  }
  return propArray;
}
