let modalWindow = document.querySelector('.modal');
let modalButton = document.querySelector('.contacts-button');
let closeButton = modalWindow.querySelector('.close');
const login = modalWindow.querySelector('[name=login]');
const form = modalWindow.querySelector('.modal-filter');
const email = modalWindow.querySelector('[name=email]');
const storage = localStorage.getItem('login');

modalButton.onclick = function(evt) {
  evt.preventDefault();
  modalWindow.classList.add('shown');
  login.focus();
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
};

closeButton.onclick = function() {
  modalWindow.classList.remove('shown');
  modalWindow.classList.remove('modal-error');
};

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    modalWindow.classList.remove('shown');
  }
});

form.addEventListener('submit', function(evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    modalWindow.classList.add('modal-error');
  }
});
