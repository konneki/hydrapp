import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

const add = document.querySelector('.flex__add--js');
const subtract = document.querySelector('.flex__subtract--js');
const infoButton = document.querySelector('.navigation__information-content');
const menuButton = document.querySelector('.navigation__content');
const historyButton = document.querySelector('.navigation__text--history--js');
const historyElements = document.querySelector('.navigation__history-grid');

const hamburger = document.querySelector('.hamburger');

let percentCounter = document.querySelector('.percent-counter--js');
let counterSelector = document.querySelectorAll('.main-counter--js');
let counterSelectorLength = counterSelector.length;
let counter = 0;

const key = new Date().toISOString().slice(0, 10);
const keyDay = key.slice(8, 10);
const keyMonth = key.slice(5, 7);

hamburger.addEventListener('click', () => {
  // hamburger animation trigger
  hamburger.classList.toggle('is-active');
});

// store value in localstorage with todays key
const entry = localStorage.getItem(key);
let result;
if (entry) {
  result = JSON.parse(entry);
  if (result.day === keyDay) {
    for (let i = 0; i < counterSelectorLength; i++) {
      counterSelector[i].innerHTML = result.value;
    }
    counter = result.value;
  } else {
    // if there is nothing in key, value = '0' (new day)
    counter = 0;
  }
} else {
  for (let i = 0; i < counterSelectorLength; i++) {
    counterSelector[i].innerHTML = counter;
  }
}

// add eventlisteners to buttons and increment or decrement by 1
add.addEventListener('click', () => {
  counter += 1;
  if (counter >= 0) {
    for (let i = 0; i < counterSelectorLength; i++) {
      counterSelector[i].innerHTML = counter;
    }
    localStorage.setItem(
      key,
      JSON.stringify({
        day: keyDay,
        month: keyMonth,
        value: counter,
      })
    );
  } else {
    counter = 0;
  }
});
subtract.addEventListener('click', () => {
  counter -= 1;
  if (counter >= 0) {
    for (let i = 0; i < counterSelectorLength; i++) {
      counterSelector[i].innerHTML = counter;
    }
    localStorage.setItem(
      key,
      JSON.stringify({
        day: keyDay,
        month: keyMonth,
        value: counter,
      })
    );
  } else {
    counter = 0;
  }
});

const percentageCalc = () => {
  let percentage = (counter / 15) * 100;
  percentCounter.innerHTML = `${Math.round(percentage)}%`;
};

// menu toggle
let toggleMenuStatus = false;
window.toggleMenu = function () {
  if (toggleMenuStatus === false) {
    menuButton.style.visibility = 'visible';
    percentageCalc();
    toggleMenuStatus = true;
  } else if (toggleMenuStatus === true) {
    menuButton.style.visibility = 'hidden';
    toggleMenuStatus = false;
  }
};
// info toggle
let toggleInfoStatus = false;
window.toggleInfo = function () {
  if (toggleInfoStatus === false) {
    infoButton.style.visibility = 'visible';
    toggleInfoStatus = true;
  } else if (toggleInfoStatus === true) {
    infoButton.style.visibility = 'hidden';
    toggleInfoStatus = false;
  }
};

// use history saved in localstorage and implement it into the history layout

// localStorage.clear();
