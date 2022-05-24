var $lightBulb = document.querySelector('.light-bulb-on');
var onSwitch = 0;

function bulbClick(event) {
  onSwitch++;
  if (onSwitch % 2 === 0) {
    $lightBulb.className = 'light-bulb-on';
    document.body.style.backgroundColor = '#fefdec';
  } else {
    $lightBulb.className = 'light-bulb-off';
    document.body.style.backgroundColor = 'black';
  }
}

$lightBulb.addEventListener('click', bulbClick);
