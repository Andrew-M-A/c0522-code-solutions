var $tabContainer = document.querySelector('.tab-container');

var $tabElements = document.querySelectorAll('.tab');

var $viewElements = document.querySelectorAll('.view');

function tabClick(event) {

  if (event.target.className !== 'tab') {
    return;
  }

  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabElements.length; i++) {
      if ($tabElements[i] === event.target) {
        $tabElements[i].className = 'tab active';
      } else {
        $tabElements[i].className = 'tab';
      }
    }
    var $dataViewValue = event.target.getAttribute('data-view');
    for (var k = 0; k < $viewElements.length; k++) {
      if ($viewElements[k].getAttribute('data-view') === $dataViewValue) {
        $viewElements[k].className = 'view';
      } else {
        $viewElements[k].className = 'hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', tabClick);
