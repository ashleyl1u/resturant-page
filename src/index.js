

import createHeader from './scripts/header';
import '../src/styles/main.css';
import createHome from './scripts/home';


//renderHomePage();

createHeader();
createHome();


document.getElementById('home-btn').addEventListener('click', () => {
  document.getElementById('content').textContent= '';
  createHome();
});


document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('content').textContent= '';
});

document.getElementById('contact-btn').addEventListener('click', () => {
  document.getElementById('content').textContent= '';
});