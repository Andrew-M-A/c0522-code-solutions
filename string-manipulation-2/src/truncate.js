/* exported truncate */

function truncate(length, string) {
  return string.slice(0, length) + '...';
}

/*
1.) define a function that cuts the string parameter by the length parameter and appends an elipsis '...'
2.) call the slice method on the string parameter that starts at the first letter and ends at the length parameter
3.) concatenate that with an elipsis '...'
4.) return the result of that expression
*/
