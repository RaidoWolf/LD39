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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _loading = __webpack_require__(2);

var _loading2 = _interopRequireDefault(_loading);

var _mainMenu = __webpack_require__(3);

var _mainMenu2 = _interopRequireDefault(_mainMenu);

var _playing = __webpack_require__(4);

var _playing2 = _interopRequireDefault(_playing);

var _gameOver = __webpack_require__(1);

var _gameOver2 = _interopRequireDefault(_gameOver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.loadingState = _loading2.default;
window.mainMenuState = _mainMenu2.default;
window.playingState = _playing2.default;
window.gameOverState = _gameOver2.default;

window.game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, // game window height
window.innerHeight * window.devicePixelRatio, // game window width
Phaser.AUTO, // automatically choose renderer
'', // initial DOM element (take whole window)
null, false, // disable canvas transparency
false // disable anti-aliasing
);

game.state.add('loading', _loading2.default);
game.state.add('mainMenu', _mainMenu2.default);
game.state.add('playing', _playing2.default);
game.state.add('gameOverState', _gameOver2.default);

game.state.start('loading'); // start loading screen to bootstrap game

window.largestDimension = window.innerWidth > window.innerHeight ? window.innerWidth * window.devicePixelRatio : window.innerHeight * window.devicePixelRatio;

window.gameScaleBase = largestDimension / 800;

exports.default = game;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function gameOverState() {}

gameOverState.prototype.preload = function () {};
gameOverState.prototype.create = function () {};
gameOverState.prototype.update = function () {};

exports.default = gameOverState;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function loadingState() {}

loadingState.prototype.preload = function () {};
loadingState.prototype.create = function () {};
loadingState.prototype.update = function () {};

exports.default = loadingState;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function mainMenuState() {}

mainMenuState.prototype.preload = function () {};
mainMenuState.prototype.create = function () {};
mainMenuState.prototype.update = function () {};

exports.default = mainMenuState;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function playingState() {}

playingState.prototype.preload = function () {};
playingState.prototype.create = function () {};
playingState.prototype.update = function () {};

exports.default = playingState;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(0);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);