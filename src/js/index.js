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

let counterSelector = document.querySelectorAll('.main-counter--js');
let counterSelectorLength = counterSelector.length;
let counter = 0;

const key = new Date().toISOString().slice(0, 10);
const keyDay = key.slice(8, 10);
const keyMonth = key.slice(5, 7);

let navMain =
  '<div class="navigation__content"><p class="navigation__text"><span class="navigation__text--big main-counter--js">%value%</span> cups drunk today</p><p class="navigation__text navigation__text--small">that is</p><p class="navigation__text"><span class="navigation__text--big percent-counter--js">10%</span> of daily fluid intake</p><p class="navigation__text navigation__text--history navigation__text--history--js">history</p></div>';
let navInfo =
  '<div class="navigation__information-content"><p class="navigation__information-text">Water is the most underutilized tool when it comes to your health. From hydrating skin and helping with headaches to giving you an endless supply of energy, simply drinking enough H2O each day can pay off in a big way.</p><p class="navigation__information-text"> “Proper hydration is key not only to making sure we stay alert and energized, but also to keeping everything functioning in our bodies,” says Jaclyn London, MS, RD, CDN, Nutrition Director at Good Housekeeping Institute. “Most of us need to drink between 8-10 cups (as a general rule of thumb) of water per day — and much more when we factor in heat, sweat, medications, and humidity shifts.”</p><p class="navigation__information-text"> Yes, remembering to carry — much less sip on — a water bottle throughout the day can feel like a challenge, but drinking enough water is essential for your wellbeing.</p>';
let navHistory =
  '<div class="navigation__history-content"><section class="navigation__history-grid"></section></div>';
let navHistoryArticle =
  '<article class="navigation__history-element"><h2 class="navigation__history-element-header">%date%</h2><p class="navigation__history-element-text"> Cups drunk: %value%<span class="cups-count--js">8</span></p><p class="navigation__history-element-text">Daily water intake: <span class="percentage--js">20%</span></p></article>';

// menu toggle
let toggleMenuStatus = false;
window.toggleMenu = function () {
  if (toggleMenuStatus === false) {
    menuButton.style.visibility = 'visible';
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

// use history saved in localstorage and implement it into the history layout

// localStorage.clear();
