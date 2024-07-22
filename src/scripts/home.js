export default createHome;
import '../styles/home.css';

function createHome(){
  const home = document.createElement('div');
  home.classList.add('home');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  const backgroundImage = document.createElement('img');
  backgroundImage.src = '../../dist/images/lama-roscu-Wpg3Qm0zaGk-unsplash.jpg';

  imgContainer.appendChild(backgroundImage);


  const colorOverlay = document.createElement('div');
  colorOverlay.classList.add('color-overlay');

  imgContainer.appendChild(colorOverlay);


  const h2 = document.createElement('h2');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const btn = document.createElement('button');
  const textContainer = document.createElement('div');

  textContainer.classList.add('text-container');

  h2.textContent = 'welcome to';
  h1.textContent = `SCOOP'S`;
  p.textContent = 'ice cream made fresh & delicious everyday!'
  btn.textContent = `Learn More`;
  

  textContainer.appendChild(h2);
  textContainer.appendChild(h1);
  textContainer.appendChild(p);
  textContainer.appendChild(btn);

  imgContainer.appendChild(textContainer);
  
  home.appendChild(imgContainer);
  

  document.getElementById('content').appendChild(home);
}