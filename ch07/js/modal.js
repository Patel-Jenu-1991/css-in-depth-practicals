'use strict';

var button = document.getElementById('open'),
    close = document.getElementById('close'),
    modal = document.getElementById('modal');

// Opens the modal when the user clicks the Sign up button
button.addEventListener('click', function (event) {
  event.preventDefault();
  modal.style.display = 'block';
});

// Closes the modal when the user clicks the Close button
close.addEventListener('click', function (event) {
  event.preventDefault();
  modal.style.display = 'none';
});
