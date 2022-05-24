var $openModalButton = document.querySelector('.open-modal-button');

var $modal = document.querySelector('.modal');

var $noButton = document.querySelector('.no-button');

function modalClick(event) {
  $modal.style.display = 'block';
}

function noButtonClick(event) {
  $modal.style.display = 'none';
}

$openModalButton.addEventListener('click', modalClick);
$noButton.addEventListener('click', noButtonClick);
