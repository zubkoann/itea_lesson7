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
/******/ 	return __webpack_require__(__webpack_require__.s = "./classworks/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./classworks/index.js":
/*!*****************************!*\
  !*** ./classworks/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediator */ \"./classworks/mediator.js\");\n\r\n\r\nObject(_mediator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./classworks/index.js?");

/***/ }),

/***/ "./classworks/mediator.js":
/*!********************************!*\
  !*** ./classworks/mediator.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n  Написать медиатор для группы студентов.\n\n  Профессор отвечает только на вопросы старосты.\n\n  У Студента есть имя и группа которой он пренадлежит.\n  Он может запросить старосту задать вопрос или получить ответ.\n\n  Староста может добавлять студентов в группу и передавать вопрос профессору.\n*/\n\nconst Mediator = () => {\n    class Professor {\n        constructor(name) {\n            this.name = name;\n            this.monitor = null;\n            this.answer=null;\n            console.log(this)\n        }\n        answerTheQuestion(student, question) {\n            if (student.monitor !== 'monitor') {\n                console.error('It\\' not your bussines');\n            } else {\n                console.log(`Yes, my dear?! ${question} Let me 1 min to think`);\n                this.answer = prompt('what to answer to student?');\n            }\n        }\n    }\n\n    class Student {\n        constructor(name) {\n            this.name = name;\n            this.monitor = null;\n            console.log(this)\n        }\n\n        getAnswer(question, professor) {\n            if (this.monitor !== null ) {\n                if(professor.answer!==null){\n                    console.log( `Professor send answer  ${professor.answer} `)\n                }else{\n                    console.log( `Professor hasn't answer yet `)\n                }\n            } else {\n                console.warn(`${this.name} - you can't ask without Monitor, please add to group first`);\n            }\n        }\n\n        tipTheMonitor(question, professor) {\n            if (this.monitor !== null) {\n                this.monitor.askProfessor(this, professor, question);\n            } else {\n                console.warn(`${this.name} - you can't ask without Monitor, please add to group first`);\n            }\n        }\n    }\n\n    class Monitor extends Student {\n        constructor(name) {\n            super(name);\n            this.monitor = 'monitor'\n            this.studentGroup = {};\n            this.professors = {};\n        }\n\n        addToGroup(student) {\n            this.studentGroup[student.name] = student;\n            student.monitor = this;\n            console.log(`Add new student '${student.name}'  to group`);\n            console.log('List or students:', this.studentGroup);\n        }\n\n        addProfessor(professor) {\n            this.professors[professor.name] = professor;\n            professor.monitor = this;\n            console.log(`Add new professor '${professor.name}'`);\n            console.log('List or professors:', this.professors);\n        }\n\n        askProfessor(student, professor, question) {\n            console.log(`${student.name} asks ${professor.name}: ${question}`);\n            professor.answerTheQuestion(this, question);\n\n        }\n        sendProfessorAnswer(student, professor, question) {\n            let answer =  professor.answerTheQuestion(this, question);\n            console.log(`${professor.name} send to ${student.name} answer: ${answer}`);\n\n\n        }\n    }\n\n    let student1 = new Student('Petya');\n    let student2 = new Student('Katya');\n    let student3 = new Student('Olya');\n    let monitor = new Monitor('Valera')\n    let professor = new Professor('Alexandr Petrovich');\n\n    monitor.addProfessor(professor);\n    monitor.addToGroup(student1);\n    monitor.addToGroup(student2);\n\n    student1.tipTheMonitor('how much', professor)\n    student1.getAnswer('how much', professor)\n    student3.tipTheMonitor('how much', professor)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mediator);\n\n\n//# sourceURL=webpack:///./classworks/mediator.js?");

/***/ })

/******/ });