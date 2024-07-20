export default createMenu;
import '../styles/menu.css'

function createMenu (){
  
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const h1 = document.createElement('h1');
  h1.textContent = 'EXPLORE OUR DELICIOUS FLAVOURS!'

  menuContainer.appendChild(h1);

  const itemsContainer = document.createElement('div');
  itemsContainer.classList.add('items-container');

  //menu item creation
  createMenuItems(itemsContainer);

  menuContainer.appendChild(itemsContainer);

  document.getElementById('content').appendChild(menuContainer);
  
  
}


function createMenuItems(itemsContainer){
  items.forEach( (menuItem) => {
    const item = document.createElement('div');
    item.classList.add('item');

    const itemName = document.createElement('h3');
    itemName.textContent = `${menuItem.name}`;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = `${menuItem.description}`;

    const itemButton = document.createElement('button');
    itemButton.textContent = 'See Details >';

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemDescription)

    item.appendChild(itemInfo);
    item.appendChild(itemButton);



    itemsContainer.appendChild(item);

  })
}


const items = [
  {
    name: 'VANILLA',
    description: 'smooth and creamy vanilla ice cream.'
  },
  {
    name: 'CHOCOLATE',
    description: 'classic rich chocolate ice cream.'
  },
  {
    name: 'STRAWBERRY',
    description: 'strawberry ice cream made with fresh strawberries.'
  },
  {
    name: `COOKIES N'CREAM`,
    description: 'vanilla ice cream with chunks of oreo.'
  },
  {
    name: 'MANGO',
    description: 'fresh mango ice cream.'
  },
  {
    name: 'MINT',
    description: 'mint ice cream with chunks of chocolate.'
  },
  {
    name: 'COTTON CANDY',
    description: 'pink and blue cotton candy ice cream.'
  },
  {
    name: 'GREEN TEA',
    description: 'refreshing green tea ice cream.'
  },
  {
    name: 'PISTACHIO',
    description: 'pistachio ice cream with pistachio nuts.'
  }

]