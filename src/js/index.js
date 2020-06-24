import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

const add = document.querySelector('.flex__add--js');
const subtract = document.querySelector('.flex__subtract--js');
const infoButton = document.querySelector('.navigation__information-content');
const navInfoButton = document.querySelector('.navigation__info-button');
const menuButton = document.querySelector('.navigation__content');
const historyButton = document.querySelector('.navigation__history-content');
const historyElements = document.querySelector('.navigation__history-grid');

const historyArticles = `<article class="navigation__history-element"><h2 class="navigation__history-element-header">Monday, 26.06</h2><p class="navigation__history-element-text"> Cups drunk: <span class="cups-count--js">8</span></p><p class="navigation__history-element-text">Daily water intake: <span class="percentage--js">20%</span></p></article>`;
const hamburger = document.querySelector('.hamburger');

let percentCounter = document.querySelectorAll('.percent-counter--js');
let counterSelector = document.querySelectorAll('.main-counter--js');
let counter = 0;
let percentage;

const key = new Date().toISOString().slice(0, 10);
const keyDay = key.slice(8, 10);
const keyMonth = key.slice(5, 7);

hamburger.addEventListener('click', () => {
  // hamburger animation trigger
  hamburger.classList.toggle('is-active');
});

// calculate percentage based on counter value
const percentageCalc = () => {
  percentage = (counter / 15) * 100;
  for (let i = 0; i < percentCounter.length; i++) {
    percentCounter[i].innerHTML = `${Math.round(percentage)}%`;
  }
  // percentCounter.innerHTML = `${Math.round(percentage)}%`;
};
const updateUI = () => {
  if (counter >= 0) {
    for (let i = 0; i < counterSelector.length; i++) {
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
    percentageCalc();
  } else {
    counter = 0;
  }
};
const increment = () => {
  counter += 1;
  updateUI();
};
const decrement = () => {
  counter -= 1;
  updateUI();
};

// store value in localstorage with todays key
const entry = localStorage.getItem(key);
let result;
if (entry) {
  result = JSON.parse(entry);
  if (result.day === keyDay) {
    for (let i = 0; i < counterSelector.length; i++) {
      counterSelector[i].innerHTML = result.value;
    }
    counter = result.value;
    percentageCalc();
  } else {
    // if there is nothing in key, value = '0' (new day)
    counter = 0;
  }
} else {
  for (let i = 0; i < counterSelector.length; i++) {
    counterSelector[i].innerHTML = counter;
  }
}

// add eventlisteners to buttons and increment or decrement by 1
add.addEventListener('click', increment);
window.addEventListener('keyup', function (event) {
  if (event.keyCode === 187 || event.keyCode === 38 || event.keyCode === 39) {
    event.preventDefault();
    increment();
  }
});
subtract.addEventListener('click', decrement);
window.addEventListener('keyup', function (event) {
  if (event.keyCode === 189 || event.keyCode === 40 || event.keyCode === 37) {
    event.preventDefault();
    decrement();
  }
});

// history toggle
let toggleHistoryStatus = false;
window.toggleHistory = () => {
  if (toggleHistoryStatus === false) {
    historyButton.style.visibility = 'visible';
    historyButton.style.opacity = '1';
    toggleHistoryStatus = true;
  } else if (toggleHistoryStatus === true) {
    historyButton.style.visibility = 'hidden';
    historyButton.style.opacity = '0';
    toggleHistoryStatus = false;
  }
};

// menu toggle
let toggleMenuStatus = false;
window.toggleMenu = () => {
  if (toggleMenuStatus === false) {
    menuButton.style.visibility = 'visible';
    menuButton.style.opacity = '1';
    toggleMenuStatus = true;
  } else if (toggleMenuStatus === true) {
    if (toggleHistoryStatus === true || toggleInfoStatus === true) {
      toggleHistory();
      toggleHistoryStatus = false;
    } else if (toggleInfoStatus === true) {
      toggleInfo();
      toggleInfoStatus = false;
    }
    menuButton.style.visibility = 'hidden';
    menuButton.style.opacity = '0';
    toggleMenuStatus = false;
  }
};

// info toggle
let toggleInfoStatus = false;
window.toggleInfo = () => {
  if (toggleInfoStatus === false) {
    infoButton.style.visibility = 'visible';
    infoButton.style.opacity = '1';
    infoButton.style.zIndex = '6';
    navInfoButton.style.zIndex = '7';
    toggleInfoStatus = true;
  } else if (toggleInfoStatus === true) {
    if (toggleHistoryStatus === true) {
      toggleHistory();
      toggleHistoryStatus = false;
    } else if (toggleMenuStatus === true) {
      toggleMenu();
      toggleMenuStatus = false;
    }
    infoButton.style.visibility = 'hidden';
    infoButton.style.opacity = '0';
    infoButton.style.zIndex = '2';
    navInfoButton.style.zIndex = '2';
    toggleInfoStatus = false;
  }
};

// use history saved in localstorage and implement it into the history layout

// localStorage.clear();
