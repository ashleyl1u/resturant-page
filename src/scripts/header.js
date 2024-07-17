export default createHeader;
import '../styles/header.css';

function createHeader(){
  const header = document.createElement('header');
  header.classList.add('header');

  const imgDiv = document.createElement('div');
  const logo = document.createElement('img');
  logo.src = '../src/images/logo.png';
  imgDiv.appendChild(logo);

  imgDiv.classList.add('logo-container');

  header.appendChild(imgDiv);


  const nav = document.createElement('nav');
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  homeBtn.textContent = 'HOME';
  menuBtn.textContent = 'MENU';
  contactBtn.textContent = 'CONTACT';

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  header.appendChild(nav);

  document.body.appendChild(header); 
 
}