let slideSmartphone = document.querySelector('.slide-smartphone');
let slideMonitor = document.querySelector('.slide-monitor');
let slideTablet = document.querySelector('.slide-tablet');

let btn1 = document.getElementById('slide-btn-1');
let btn2 = document.getElementById('slide-btn-2');
let btn3 = document.getElementById('slide-btn-3');

btn1.onclick = function (evt) {
  evt.preventDefault();
  btn1.classList.add('current');
  btn2.classList.remove('current');
  btn3.classList.remove('current');
  slideSmartphone.classList.remove('visually-hidden');
  slideMonitor.classList.add('visually-hidden');
  slideTablet.classList.add('visually-hidden');
}

btn2.onclick = function (evt) {
  evt.preventDefault();
  btn1.classList.remove('current');
  btn2.classList.add('current');
  btn3.classList.remove('current');
  slideSmartphone.classList.add('visually-hidden');
  slideMonitor.classList.remove('visually-hidden');
  slideTablet.classList.add('visually-hidden');
}

btn3.onclick = function (evt) {
  evt.preventDefault();
  btn1.classList.remove('current');
  btn2.classList.remove('current');
  btn3.classList.add('current');
  slideSmartphone.classList.add('visually-hidden');
  slideMonitor.classList.add('visually-hidden');
  slideTablet.classList.remove('visually-hidden');
}
