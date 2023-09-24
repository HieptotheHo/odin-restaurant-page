import '../css/contact-styling.css';
import createTabs from './tabs';

const createContactPage = () => {
    const contactContainer = document.createElement('div');
    contactContainer.id ='contact-container';
    
    const divE = document.createElement('div');
    divE.id='phone-content';

    const phone = document.createElement('h1');
    phone.textContent = '0909090909';

    divE.appendChild(phone);
    contactContainer.appendChild(divE);

    const content = document.querySelector('#content');
    
    content.appendChild(contactContainer);
    content.appendChild(createTabs());
}

export default createContactPage;