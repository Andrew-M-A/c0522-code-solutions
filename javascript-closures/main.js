function graduate(credential) {
  return function name(fullName) {
    return fullName + ', ' + credential;
  };

}

var medicalSchool = graduate('M.D.');
var lawSchool = graduate('Esq.');

console.log('Med School Grad heh:', medicalSchool('Andrew Almeida'));
console.log('Law School Grad heheheh:', lawSchool('Andrew Almeida'));
