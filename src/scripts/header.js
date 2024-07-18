export default createHeader;
import '../styles/header.css';

function createHeader(){
  const headerContent = document.createElement('header');
  headerContent.classList.add('header');

  const imgDiv = document.createElement('div');
  const logo = document.createElement('img');
  logo.src = '../src/images/ice-cream.png';
  imgDiv.appendChild(logo);

  imgDiv.classList.add('logo-container');

  headerContent.appendChild(imgDiv);


  const nav = document.createElement('nav');
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  homeBtn.textContent = 'HOME';
  menuBtn.textContent = 'MENU';
  contactBtn.textContent = 'CONTACT';

  homeBtn.setAttribute('id', 'home-btn');
  menuBtn.setAttribute('id', 'menu-btn');
  contactBtn.setAttribute('id', 'contact-btn');

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  headerContent.appendChild(nav);

  document.getElementById('header').appendChild(headerContent); 
 
}




