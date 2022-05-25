var $input = document.querySelector('#contact-form');

function onSubmit(event) {
  event.preventDefault();
  var values = {};
  values.name = $input[0].value;
  values.email = $input[1].value;
  values.message = $input[2].value;
  console.log(values);
}

$input.addEventListener('submit', onSubmit);
