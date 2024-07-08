/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    createPageStructure();\r\n    \r\n});\r\n\r\nfunction createPageStructure() {\r\n    const body = document.body;\r\n\r\n    // Header\r\n    const header = document.createElement('header');\r\n    //header.appendChild(title);\r\n    const title = document.createElement('h1'); // Assuming you want a header element\r\n    title.textContent = 'Aamir Pharmacy'; // Setting the text content\r\n    header.appendChild(title);\r\n\r\n    // Navigation\r\n    const nav = document.createElement('nav');\r\n    const ul = document.createElement('ul');\r\n    ['Home', 'Services', 'Contact'].forEach(item => {\r\n        const li = document.createElement('li');\r\n        const a = document.createElement('a');\r\n        a.href = `#${item.toLowerCase()}`;\r\n        a.textContent = item;\r\n        li.appendChild(a);\r\n        ul.appendChild(li);\r\n    });\r\n    nav.appendChild(ul);\r\n    header.appendChild(nav);\r\n\r\n \r\n    body.appendChild(header);\r\n\r\n    // Main Content\r\n    const main = document.createElement('main');\r\n    main.id = 'content';\r\n    main.textContent=\"Dummy text\"\r\n    body.appendChild(main);\r\n\r\n    // Footer\r\n    const footer = document.createElement('footer');\r\n    const footerText = document.createElement('p');\r\n    footerText.textContent = '© 2024 Aamir Pharmacy. All rights reserved.';\r\n    footer.appendChild(footerText);\r\n    body.appendChild(footer);\r\n}\n\n//# sourceURL=webpack://fe/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;