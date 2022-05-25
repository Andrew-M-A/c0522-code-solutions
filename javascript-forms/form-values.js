var $input = document.querySelector('#contact-form');

function onSubmit(event) {
  event.preventDefault();
  var values = {};
  values.name = $input.name.value;
  values.email = $input.email.value;
  values.message = $input.message.value;
  console.log(values);
}

$input.addEventListener('submit', onSubmit);
