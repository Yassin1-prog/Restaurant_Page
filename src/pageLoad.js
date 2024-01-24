function initialPageLoad() {

   const header = document.createElement('h1');
   header.textContent = "Butcher Food";
   const styles = 'font-size: 32px; color: crimson; font-weight: bold;';
   header.setAttribute('style', styles);

   const image = document.createElement('img');
   image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzIDE8kKmLDHhZTYQ8YsMBCmlLeSHj-gA7DCrKu_LSg&s';
   image.alt = 'image of a burger';
   image.height = 200;
   image.width = 300;

   const desc = document.createElement('p');
   desc.textContent = 'Welcome to  Butcher Food where culinary delight meets burger perfection! Our passion for crafting the most mouthwatering burgers is evident in every bite. From sizzling beef patties to vegetarian delights, our diverse menu caters to all taste buds. We source only the finest, freshest ingredients to create a symphony of flavors that will leave you craving more.';
   const stil = 'font-family: sans-serif;'
   desc.setAttribute('style', stil);

   const main = document.querySelector('#content');
   main.appendChild(header);
   main.appendChild(image);
   main.appendChild(desc);


}

export { initialPageLoad };