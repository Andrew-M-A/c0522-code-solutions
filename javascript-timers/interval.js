var $h1 = document.querySelector('.countdown-display');

var interval = setInterval(countDown, 1000);

function countDown(number) {

  $h1.textContent = $h1.textContent - 1;
  if ($h1.textContent === '0') {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}
