import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

const add = document.querySelector('.flex__add--js');
const subtract = document.querySelector('.flex__subtract--js');
const info = document.querySelector('.navigation__info-button');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
});
