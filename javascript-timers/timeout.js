var $h1 = document.querySelector('.message');

function helloWorld() {
  $h1.textContent = 'Hello World';
}

setTimeout(helloWorld, 2000);
