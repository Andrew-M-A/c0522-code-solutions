var student = {
  firstName: 'Andrew',
  lastName: 'Almeida',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('Value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Costco';

console.log('Value of student.livesInIrvine: ' + student.livesInIrvine);
console.log('Value of student.previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Aston Martin',
  model: 'Vanquish',
  year: 2010
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;

console.log('Value of vehicle object: ', vehicle);

var pet = {
  name: 'Douglas',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('Value of pet object: ', pet);
