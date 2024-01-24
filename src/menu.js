function menuLoad() {

    const header = document.createElement('h1');
    header.textContent = "Menu";
    const styles = 'font-size: 32px; color: black; font-weight: bold;';
    header.setAttribute('style', styles);
 
    const image = document.createElement('img');
    image.src = 'https://media.istockphoto.com/id/545652444/vector/restaurant-cafe-menu-template-design.jpg?s=612x612&w=0&k=20&c=1uSa1pe57w3Z0MpuYrM1v8mq7-nJHXRnUOLi7DajKjU=';
    image.alt = 'image of a menu';
    image.height = 200;
    image.width = 300;
 
    const unorderedList = document.createElement('ul');

    const listItem1 = document.createElement('li');
    listItem1.textContent = 'KING BUrger: 22$';
    unorderedList.appendChild(listItem1);

    const listItem2 = document.createElement('li');
    listItem2.textContent = 'BUtcher Special: 55$';
    unorderedList.appendChild(listItem2);

    const listItem3 = document.createElement('li');
    listItem3.textContent = 'Family Butcher Meal: 112$';
    unorderedList.appendChild(listItem3);
 
    const main = document.querySelector('#content');
    main.appendChild(header);
    main.appendChild(image);
    main.appendChild(unorderedList);
 
 
 }
 
 export { menuLoad };