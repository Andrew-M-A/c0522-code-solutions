function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var minutes = convertMinutesToSeconds(5);

console.log('Value of minutes: ', minutes);

function greet(name) {
  return 'Hey, ' + name;
}

var greeting = greet('Andrew');

console.log('Value of greeting: ', greeting);

function getArea(width, height) {
  return width * height;
}

var area = getArea(17, 42);

console.log('Value of area: ', area);

function getFirstName(person) {
  return person.firstName;
}

var firstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('Value of firstName: ', firstName);

function getLastElement(array) {
  return array[array.length - 1];
}

var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('Value of lastElement', lastElement);
