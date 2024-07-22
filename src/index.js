

import createHeader from './scripts/header';
import '../src/styles/main.css';
import createHome from './scripts/home';
import createMenu from './scripts/menu';
import createContact from './scripts/contact';


//renderHomePage();

createHeader();
createHome();



document.getElementById('home-btn').addEventListener('click', () => {
  document.getElementById('content').textContent= '';
  createHome();
});


document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('content').textContent= '';
  createMenu();
  
  
});

document.getElementById('contact-btn').addEventListener('click', () => {
  document.getElementById('content').textContent= '';
  createContact();
});