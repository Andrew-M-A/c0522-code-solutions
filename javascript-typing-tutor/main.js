var $phrase = document.querySelectorAll('span');

var counter = 0;
var totalStrokes = 0;

function typeCheck(event) {

  totalStrokes++;

  if ($phrase[counter].textContent === event.key) {
    $phrase[counter].className = 'green-span';
    counter++;
    $phrase[counter].className = 'underline';
  } else {
    $phrase[counter].className = 'red-span red-underline';
  }

  if (counter === 29) {
    var accuracy = Math.floor((counter / totalStrokes) * 100);
    var phrase = 'You had ' + accuracy + '% ' + 'accuracy!';

    var $completion = document.createElement('h1');
    document.body.appendChild($completion);
    $completion.textContent = phrase;
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
