/* exported defaults */
function defaults(target, source) {
  for (var property in source) {
    if (target[property] === undefined) {
      target[property] = source[property];
    }
  }
}

/*
1.) use a for-in loop to get the properties of source
2.) use an if statement to check if the properties of target are undefined
3.) if they are, assign the properties of source to the properties of target
*/
