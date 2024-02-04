document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('displayansbutton');
    var image = document.getElementById('panswer');  
    toggleButton.addEventListener('click', function() {
      image.classList.toggle('hidden');
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('displayansbutton');
    var image = document.getElementById('panswer2');  
    toggleButton.addEventListener('click', function() {
      image.classList.toggle('hidden');
    });
  });

