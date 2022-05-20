/* exported oddOrEven */

function oddOrEven(numbers) {
  var numType = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numType.push('even');
    } else {
      numType.push('odd');
    }
  } return numType;
}
