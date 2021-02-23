'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.mobile-list');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--toggle');

  menu.classList.toggle('mobile-list--opened');
});
