/* exported setValue */

function setValue(object, key, value) {
  object[key] = value;
  return object;
}

/*
  1.) define a function with three parameters,
      the first is any JavaScript object, the second is any JavaScript string,
      and the third is any JavaScript value... which sets the value of an object
  2.) use bracket notation to set the property of the object parameter
      to the value parameter
  3.) return the result of that expression
*/
