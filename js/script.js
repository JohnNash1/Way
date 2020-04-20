'use strict';

const ESC = 'Escape';

const purchase = document.querySelector('.purchase');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const closeButton = purchase.querySelector('.purchase__close');
const purchaseButton = document.querySelectorAll('.purchase-button');
const toFocus = document.querySelector('.purchase__input--tel');
const writUsTel = document.querySelector('.write-us__input--tel');
const countryTabs = document.querySelectorAll('.tours__anchor');
const placesAnchors = document.querySelectorAll('.places__anchor');
const contryCards = document.querySelectorAll('.country');

const menuButton = document.querySelector('.page-header__toggle');
const menuClose = document.querySelector('.main-navigation__close');
const menu = document.querySelector('.main-navigation');
const header = document.querySelector('.page-header');

// const tabsMenu = document.querySelector('.tours__list');

const TEL = [
  toFocus,
  writUsTel,
];

menu.classList.remove('main-navigation--nojs');
menu.classList.add('main-navigation--closed');
header.classList.remove('page-header--nojs');
header.classList.add('page-header--closed');

[...purchaseButton].forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    purchase.classList.add('purchase--opened');
    body.classList.add('show-overlay');
    toFocus.focus();
  });
});

closeButton.addEventListener('click', () => {
  purchase.classList.remove('purchase--opened');
  body.classList.remove('show-overlay');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === ESC) {
    purchase.classList.remove('purchase--opened');
    body.classList.remove('show-overlay');
  }
});

document.addEventListener('click', (evt) => {
  if (evt.target === overlay) {
    purchase.classList.remove('purchase--opened');
    body.classList.remove('show-overlay');
  }

  if (evt.target === menuButton) {
    menu.classList.remove('main-navigation--closed');
    menu.classList.add('main-navigation--opened');
    header.classList.remove('page-header--closed');
    header.classList.add('page-header--opened');
  }

  if (evt.target === menuClose) {
    menu.classList.remove('main-navigation--opened');
    menu.classList.add('main-navigation--closed');
    header.classList.remove('page-header--opened');
    header.classList.add('page-header--closed');
  }
});

for (let i = 0; i < countryTabs.length; i++) {
  document.addEventListener('click', (evt) => {
    if (evt.target === countryTabs[i]) {
      evt.preventDefault();
    }

    if (evt.target === countryTabs[i] || evt.target === placesAnchors[i]) {
      [...contryCards].forEach((item) => {
        if (!item.classList.contains('visually-hidden')) {
          item.classList.add('visually-hidden');
        }
      });

      [...countryTabs].forEach((item) => {
        if (item.classList.contains('tours__anchor--active')) {
          item.classList.remove('tours__anchor--active');
        }
      });

      countryTabs[i].classList.add('tours__anchor--active');
      contryCards[i].classList.remove('visually-hidden');
    }
  });
}

TEL.forEach((item) => {
  item.addEventListener('keydown', (evt) => {
    if (item.value === '' && (evt.keyCode < 48 || evt.keyCode > 57) && (evt.keyCode < 96 || evt.keyCode > 105)) {
      evt.preventDefault();
      return;
    }
    if (item.value === '') {
      item.value += '+7 ';
    }
  });
});
//
// const onTabsTouchstart = function (evt) {
//   evt.preventDefault();
//   console.log(evt);
//
//   let startCoords = {
//     x: evt.touches[0].clientX,
//   };
//
//   let xCoord = tabsMenu.style.left;
//
//   function onTouchMove(moveEvt) {
//     console.log(moveEvt.touches[0].clientX);
//
//     const shift = {
//       x: startCoords.x - moveEvt.touches[0].clientX,
//     };
//
//     startCoords = {
//       x: moveEvt.touches[0].clientX,
//     };
//
//     xCoord -= shift.x;
//
//     tabsMenu.style.left = xCoord + 'px';
//   }
//
//   // function onTouchEnd(upEvt) {
//   //   upEvt.preventDefault();
//   //
//   //   document.removeEventListener('touchmove', onTouchMove);
//   //   document.removeEventListener('touchend', onTouchEnd);
//   // }
//
//   document.addEventListener('touchmove', onTouchMove);
//   // document.addEventListener('touchend', onTouchEnd);
// };
//
// tabsMenu.addEventListener('touchstart', onTabsTouchstart);
