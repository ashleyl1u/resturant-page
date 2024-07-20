export default createContact;
import '../styles/contact.css'

function createContact () {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');


  const head = document.createElement('div');
  head.classList.add('head');
  const h1 = document.createElement('h1');
  h1.textContent = 'CONTACT US';

  const h2 = document.createElement('h2');
  h2.textContent = `Need to get in touch? Here's how...`

  head.appendChild(h1);
  head.appendChild(h2);


  contactContainer.appendChild(head);


  const formDiv = document.createElement('div');
  formDiv.classList.add('form-container');
  
  createForm(formDiv);

  contactContainer.appendChild(formDiv);

  document.getElementById('content').appendChild(contactContainer);
  
}

function createForm (formDiv) {
  const form = document.createElement('form');

  const nameInput = document.createElement('input');
  nameInput.placeholder = 'Name';
  nameInput.classList.add('input-name');
  nameInput.setAttribute('required','');

  form.appendChild(nameInput);

  const emailInput = document.createElement('input');
  emailInput.placeholder = 'Email';
  emailInput.classList.add('input-email');
  emailInput.setAttribute('required','');

  form.appendChild(emailInput);

  const messageInput = document.createElement('textarea');
  messageInput.placeholder = 'Message';
  messageInput.rows = '4';
  messageInput.classList.add('input-message');
  messageInput.setAttribute('required','');

  form.appendChild(messageInput);

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  form.appendChild(submitBtn);



  formDiv.appendChild(form);
}