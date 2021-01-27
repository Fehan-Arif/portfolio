const topCloud = document.getElementsByClassName('topCloud')[0];
const bottomCloud = document.getElementsByClassName('bottomCloud')[0];



function moveCloud() {
    topCloud.classList.add('horizTranslate');
    bottomCloud.classList.add('horizTranslate');
  };

  window.onload = function() {
    setTimeout(moveCloud, 1500);
  };