function contactLoad() {

    const header = document.createElement('h1');
    header.textContent = "Call us";
    const styles = 'font-size: 32px; color: blue; font-weight: bold;';
    header.setAttribute('style', styles);
 
    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D';
    image.alt = 'image of a phone';
    image.height = 200;
    image.width = 300;
 
    const unorderedList = document.createElement('ul');

    const listItem1 = document.createElement('li');
    listItem1.textContent = 'Central Restaurant: 93854-4338758$';
    unorderedList.appendChild(listItem1);

    const listItem2 = document.createElement('li');
    listItem2.textContent = 'Main Chef: 8837048-39475';
    unorderedList.appendChild(listItem2);

    const listItem3 = document.createElement('li');
    listItem3.textContent = 'SOus Chef: 2043508-39428953';
    unorderedList.appendChild(listItem3);
 
    const main = document.querySelector('#content');
    main.appendChild(header);
    main.appendChild(image);
    main.appendChild(unorderedList);
 
 
 }
 
 export { contactLoad };