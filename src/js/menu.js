import '../css/menu-styling.css'
import createTabs from './tabs';

const cakeNames = ['Banh Mi', 'Banh Trung Thu', 'Red Velvet', 'Brownie', 'Croissant', 'Apple Pie']

const createMenuPage = () => {
    const content = document.querySelector('#content')

    const menu = document.createElement('div');
    menu.id = 'menu-container';

    const menuTitle = document.createElement('h2');
    menuTitle.id ='menu-title';
    menuTitle.textContent = 'Menu';

    const gridElement = document.createElement('div');
    gridElement.id = 'menu-grid';

    for(let i = 0;i<6;i++) {
        let cakeName = document.createElement('h2');
        cakeName.setAttribute('class','cake-name');
        cakeName.textContent = cakeNames[i];

        let cakeImage = document.createElement('div');
        cakeImage.setAttribute('class',`cake-image no-${i}`);

        let hero = document.createElement('div');
        hero.setAttribute(`class`,`hero ${i}`);
        
        hero.appendChild(cakeName);
        hero.appendChild(cakeImage);
        gridElement.appendChild(hero);
    }

    menu.appendChild(menuTitle);
    menu.appendChild(gridElement);
    menu.appendChild(createTabs());
    content.appendChild(menu);
    
}

export default createMenuPage;