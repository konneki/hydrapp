import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

const add = document.querySelector('.flex__add--js');
const subtract = document.querySelector('.flex__subtract--js');
const info = document.querySelector('.navigation__info-button');
const navigation = document.querySelector('.navigation');
const historyButton = document.querySelector('.navigation__text--history--js');
const historyElements = document.querySelector('.navigation__history-grid');
const hamburger = document.querySelector('.hamburger');

let navMain =
  '<div class="navigation__content"><p class="navigation__text"><span class="navigation__text--big main-counter--js">4</span> cups drunk today</p><p class="navigation__text navigation__text--small">that is</p><p class="navigation__text"><span class="navigation__text--big percent-counter--js">10%</span> of daily fluid intake</p><p class="navigation__text navigation__text--history navigation__text--history--js">history</p></div>';
let navInfo =
  '<div class="navigation__information-content"><p class="navigation__information-text">Water is the most underutilized tool when it comes to your health. From hydrating skin and helping with headaches to giving you an endless supply of energy, simply drinking enough H2O each day can pay off in a big way.</p><p class="navigation__information-text"> “Proper hydration is key not only to making sure we stay alert and energized, but also to keeping everything functioning in our bodies,” says Jaclyn London, MS, RD, CDN, Nutrition Director at Good Housekeeping Institute. “Most of us need to drink between 8-10 cups (as a general rule of thumb) of water per day — and much more when we factor in heat, sweat, medications, and humidity shifts.”</p><p class="navigation__information-text"> Yes, remembering to carry — much less sip on — a water bottle throughout the day can feel like a challenge, but drinking enough water is essential for your wellbeing.</p>';
let navHistory =
  '<div class="navigation__history-content"><section class="navigation__history-grid"></section></div>';
let navHistoryArticle =
  '<article class="navigation__history-element"><h2 class="navigation__history-element-header">Monday, 26.06</h2><p class="navigation__history-element-text"> Cups drunk: <span class="cups-count--js">8</span></p><p class="navigation__history-element-text">Daily water intake: <span class="percentage--js">20%</span></p></article>';

// add beforeend of navHistory to navigation

// add afterbegin of navHistoryArticle to historyElements

hamburger.addEventListener('click', () => {
  // hamburger animation trigger
  hamburger.classList.toggle('is-active');
});
