/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactLoad: () => (/* binding */ contactLoad)\n/* harmony export */ });\nfunction contactLoad() {\n\n    const header = document.createElement('h1');\n    header.textContent = \"Call us\";\n    const styles = 'font-size: 32px; color: blue; font-weight: bold;';\n    header.setAttribute('style', styles);\n \n    const image = document.createElement('img');\n    image.src = 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D';\n    image.alt = 'image of a phone';\n    image.height = 200;\n    image.width = 300;\n \n    const unorderedList = document.createElement('ul');\n\n    const listItem1 = document.createElement('li');\n    listItem1.textContent = 'Central Restaurant: 93854-4338758$';\n    unorderedList.appendChild(listItem1);\n\n    const listItem2 = document.createElement('li');\n    listItem2.textContent = 'Main Chef: 8837048-39475';\n    unorderedList.appendChild(listItem2);\n\n    const listItem3 = document.createElement('li');\n    listItem3.textContent = 'SOus Chef: 2043508-39428953';\n    unorderedList.appendChild(listItem3);\n \n    const main = document.querySelector('#content');\n    main.appendChild(header);\n    main.appendChild(image);\n    main.appendChild(unorderedList);\n \n \n }\n \n \n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconsole.log(\"hello world!\");\n \n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)();\n\nfunction showTab(tabName) {\n    const div = document.querySelector('#content');\n    div.textContent = '';\n\n    if(tabName === 'Home') (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)();\n    if(tabName === 'Menu') (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuLoad)();\n    if(tabName === 'Contact') (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactLoad)();\n\n}\n\nwindow.showTab = showTab;\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuLoad: () => (/* binding */ menuLoad)\n/* harmony export */ });\nfunction menuLoad() {\n\n    const header = document.createElement('h1');\n    header.textContent = \"Menu\";\n    const styles = 'font-size: 32px; color: black; font-weight: bold;';\n    header.setAttribute('style', styles);\n \n    const image = document.createElement('img');\n    image.src = 'https://media.istockphoto.com/id/545652444/vector/restaurant-cafe-menu-template-design.jpg?s=612x612&w=0&k=20&c=1uSa1pe57w3Z0MpuYrM1v8mq7-nJHXRnUOLi7DajKjU=';\n    image.alt = 'image of a menu';\n    image.height = 200;\n    image.width = 300;\n \n    const unorderedList = document.createElement('ul');\n\n    const listItem1 = document.createElement('li');\n    listItem1.textContent = 'KING BUrger: 22$';\n    unorderedList.appendChild(listItem1);\n\n    const listItem2 = document.createElement('li');\n    listItem2.textContent = 'BUtcher Special: 55$';\n    unorderedList.appendChild(listItem2);\n\n    const listItem3 = document.createElement('li');\n    listItem3.textContent = 'Family Butcher Meal: 112$';\n    unorderedList.appendChild(listItem3);\n \n    const main = document.querySelector('#content');\n    main.appendChild(header);\n    main.appendChild(image);\n    main.appendChild(unorderedList);\n \n \n }\n \n \n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialPageLoad: () => (/* binding */ initialPageLoad)\n/* harmony export */ });\nfunction initialPageLoad() {\n\n   const header = document.createElement('h1');\n   header.textContent = \"Butcher Food\";\n   const styles = 'font-size: 32px; color: crimson; font-weight: bold;';\n   header.setAttribute('style', styles);\n\n   const image = document.createElement('img');\n   image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzIDE8kKmLDHhZTYQ8YsMBCmlLeSHj-gA7DCrKu_LSg&s';\n   image.alt = 'image of a burger';\n   image.height = 200;\n   image.width = 300;\n\n   const desc = document.createElement('p');\n   desc.textContent = 'Welcome to  Butcher Food where culinary delight meets burger perfection! Our passion for crafting the most mouthwatering burgers is evident in every bite. From sizzling beef patties to vegetarian delights, our diverse menu caters to all taste buds. We source only the finest, freshest ingredients to create a symphony of flavors that will leave you craving more.';\n   const stil = 'font-family: sans-serif;'\n   desc.setAttribute('style', stil);\n\n   const main = document.querySelector('#content');\n   main.appendChild(header);\n   main.appendChild(image);\n   main.appendChild(desc);\n\n\n}\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/pageLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;