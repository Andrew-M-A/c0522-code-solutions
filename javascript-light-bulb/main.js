var $lightBulb = document.querySelector('.light-bulb-on');

var onSwitch;

function bulbClick(event) {
  if (onSwitch === true) {
    $lightBulb.className = 'light-bulb-on';
    document.body.style.backgroundColor = '#fefdec';
    onSwitch = false;
  } else {
    $lightBulb.className = 'light-bulb-off';
    document.body.style.backgroundColor = 'black';
    onSwitch = true;
  }
}

$lightBulb.addEventListener('click', bulbClick);
