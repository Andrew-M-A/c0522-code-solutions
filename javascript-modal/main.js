var $openModalButton = document.querySelector('.open-modal-button');

var $modal = document.querySelector('.modal');

var $noButton = document.querySelector('.no-button');

function modalClick(event) {
  $modal.className = 'modal active';
}

function noButtonClick(event) {
  $modal.className = 'modal hidden';
}

$openModalButton.addEventListener('click', modalClick);
$noButton.addEventListener('click', noButtonClick);
