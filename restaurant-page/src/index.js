/* eslint-disable linebreak-style */
import jumbotron from './modules/jumbotron';
import menu from './modules/menu';
import gallery from './modules/gallery';
import contact from './modules/contact';
import socialMedia from './modules/socialMedia';

const filling = document.getElementById('content');

const start = () => {
  filling.innerHTML = '';
  filling.appendChild(jumbotron());
};

start();

const homePage = document.getElementById('#home');
const menuPage = document.getElementById('#menu');
const galleryPage = document.getElementById('#gallery');
const contactPage = document.getElementById('#contact');

const togglePage = (event) => {
  if (event.target === homePage) {
    start();
  } else if (event.target === menuPage) {
    filling.innerHTML = '';
    filling.appendChild(menu());
  } else if (event.target === galleryPage) {
    filling.innerHTML = '';
    filling.appendChild(gallery());
  } else {
    filling.innerHTML = '';
    filling.appendChild(contact());
    filling.appendChild(socialMedia());
  }
};

homePage.addEventListener('click', togglePage);
menuPage.addEventListener('click', togglePage);
galleryPage.addEventListener('click', togglePage);
contactPage.addEventListener('click', togglePage);
