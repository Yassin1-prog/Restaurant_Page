import { initialPageLoad } from './pageLoad';
import { menuLoad } from './menu';
import { contactLoad } from './contact';


console.log("hello world!");
 
initialPageLoad();

function showTab(tabName) {
    const div = document.querySelector('#content');
    div.textContent = '';

    if(tabName === 'Home') initialPageLoad();
    if(tabName === 'Menu') menuLoad();
    if(tabName === 'Contact') contactLoad();

}

//ensures that the showtTab function is available in global score so index.html could use it without any errors

window.showTab = showTab;