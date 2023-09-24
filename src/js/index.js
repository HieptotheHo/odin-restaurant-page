import '../css/index-styling.css';
import createTabs from './tabs';


console.log('Hello, World')

const createHomePage = () => {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.id='container';

    const mainSection = document.createElement('div');
    mainSection.id ='main-section';

    const welcome = document.createElement('p');
    welcome.textContent = 'Welcome To';

    const title = document.createElement('h2');
    title.id='title';
    title.textContent='Mama Dung Bakery';

    const slogan = document.createElement('p');
    slogan.textContent = 'Only taste better everytime'

    const navBar = document.createElement('nav');
    
    mainSection.appendChild(welcome);
    mainSection.appendChild(title);
    mainSection.appendChild(slogan);
    
    container.appendChild(mainSection);

    //////////////////////////////////////
    mainSection.appendChild(createTabs());
    //////////////////////////////////////

    content.appendChild(container);
}

export default createHomePage;
createHomePage();

