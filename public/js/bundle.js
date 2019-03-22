/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediator */ \"./application/mediator/index.js\");\n\nObject(_mediator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./application/mediator/index.js":
/*!***************************************!*\
  !*** ./application/mediator/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MediatorClasses = () => {\n\n  class Flight {\n    constructor( name ){\n      this.name = name;\n      this.controlRoom = null;\n\n      console.log(`Flight ${name} in progress`, this);\n    }\n\n    receive( message, from ){\n      console.log(`${from.name} to ${this.name}: ${message}`);\n    }\n    \n    send( message, to ){\n      if( this.controlRoom !== null){\n        this.controlRoom.send( message, this, to );\n      } else {\n        console.warn(`${this.name} - you can't send message, until you dont connected to control room`);\n      }\n    }\n  }\n\n  /*  - - - - - */\n\n  let Alpha = new Flight('Alpha');\n  let Bravo = new Flight('Bravo');\n  let Beta = new Flight('Beta');\n\n  console.log('- - - - - - - - -');\n  //\n  Alpha.receive('Welcome in Ukraine!', {name: 'SBU'});\n  Bravo.receive('Who are you?', {name: 'SBU'});\n  Bravo.send(`Don't shoot me pls!`);\n\n  /* - - - - - */\n\n  class ControlRoom{\n    constructor( name ){\n      this.name = name;\n      this.connectedFlights = {};\n    }\n    register (flight) {\n        this.connectedFlights[flight.name] = flight;\n        flight.controlRoom = this;\n\n        console.log(`New flight '${flight.name}' registered in control room ${name}`);\n        console.log('List or registered:', this.connectedFlights );\n    }\n    send( message, from, to ){\n      // console.log(\n      //   'message:', message,\n      //   '\\nfrom:', from,\n      //   '\\nthis:', this,\n      //   '\\nconnectedFlights:', this.connectedFlights\n      // );\n      if( to !== undefined ){\n        to.receive( message, from );\n      } else {\n        for( let key in this.connectedFlights ){\n          if( this.connectedFlights[key] !== from ){\n            this.connectedFlights[key].receive(message, from);\n          }\n        }\n      } // else\n    } // send\n\n  } // control room\n  /*  - - - - - */\n  //\n  const Borispol = new ControlRoom('Borispol');\n  console.log('- - - - - - - - -');\n  Borispol.register(Alpha);\n  Borispol.register(Bravo);\n  Borispol.register(Beta);\n  // console.log('- - - - - - - - -');\n  Beta.send('Hello, Kyiv! How\\'s the weather?');\n  Alpha.send('Hello guys! It\\s rainy, probably we need go to Harkiv or Odessa');\n  Alpha.send('Shoot Beta! Probably he\\'s a terrorist!', Bravo)\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MediatorClasses);\n\n\n//# sourceURL=webpack:///./application/mediator/index.js?");

/***/ })

/******/ });