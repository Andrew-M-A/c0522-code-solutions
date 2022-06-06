/* exported student */

var student = {
  firstName: 'Andrew',
  lastName: 'Almeida',
  subject: 'Code Journal',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    var introduction = 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
    return introduction;
  }
};
