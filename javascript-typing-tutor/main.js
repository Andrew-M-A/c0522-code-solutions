var $phrase = document.querySelectorAll('span');

var counter = 0;

function typeCheck(event) {

  if ($phrase[counter].textContent === event.key) {
    $phrase[counter].className = '.green-span';
    counter++;
  }

}

document.addEventListener('keydown', typeCheck);

/* access span array $phrase
if statement
(get textContent at each index)

if textContent value === event.key
turn letter green
and move underline to next index
increment counter

if textContent value !== event.key
turn letter red
keep underline in place + turn underline red
don't increment counter */
