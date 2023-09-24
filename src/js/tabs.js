import createMenuPage from "./menu";
import createHomePage from ".";
import createContactPage from "./contact";
const createTabs = () => {
    const divNavBar = document.createElement('div')
    const navBar = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', ()=> {
        emptyContent();
        createHomePage();
    });

    const menuBtn = document.createElement('button');
    menuBtn.textContent='Menu';
    menuBtn.addEventListener('click', ()=> {
        emptyContent();
        createMenuPage();
    });


    const contactBtn = document.createElement('button');
    contactBtn.textContent='Contact';
    contactBtn.addEventListener('click', ()=> {
        emptyContent();
        createContactPage();
    });

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);
    divNavBar.appendChild(navBar)
    return divNavBar;
}

const emptyContent = () => {
    const content = document.querySelector("#content");
    content.innerHTML = '';
}

export default createTabs;