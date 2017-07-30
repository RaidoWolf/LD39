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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

var _mainMenu = __webpack_require__(9);

var _mainMenu2 = _interopRequireDefault(_mainMenu);

var _playing = __webpack_require__(10);

var _playing2 = _interopRequireDefault(_playing);

var _gameOver = __webpack_require__(1);

var _gameOver2 = _interopRequireDefault(_gameOver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var targetWidth = 1280;
var targetHeight = 960;
var minimumScale = 0.5;

window.loadingState = _loading2.default;
window.mainMenuState = _mainMenu2.default;
window.playingState = _playing2.default;
window.gameOverState = _gameOver2.default;

window.largestDimension = Math.max(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);

var widthScale = 1;
var heightScale = 1;
if (window.innerWidth < targetWidth * window.devicePixelRatio) {
    widthScale = window.innerWidth * window.devicePixelRatio / (targetWidth * window.devicePixelRatio);
}
if (window.innerHeight < targetHeight * window.devicePixelRatio) {
    heightScale = window.innerHeight * window.devicePixelRatio / (targetHeight * window.devicePixelRatio);
}
if (widthScale < minimumScale) {
    widthScale = minimumScale;
}
if (heightScale < minimumScale) {
    heightScale = minimumScale;
}

window.gameScaleBase = Math.min(widthScale, heightScale);

window.game = new Phaser.Game(Math.floor(targetWidth * window.devicePixelRatio * window.gameScaleBase), // game window height
Math.floor(targetHeight * window.devicePixelRatio * window.gameScaleBase), // game window width
Phaser.AUTO, // automatically choose renderer
'game', // initial DOM element (take whole window)
null, false, // disable canvas transparency
false // disable anti-aliasing
);

game.state.add('loading', _loading2.default);
game.state.add('mainMenu', _mainMenu2.default);
game.state.add('playing', _playing2.default);
game.state.add('gameOverState', _gameOver2.default);

game.state.start('loading'); // start loading screen to bootstrap game

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

var _preload = __webpack_require__(7);

var _preload2 = _interopRequireDefault(_preload);

var _create = __webpack_require__(3);

var _create2 = _interopRequireDefault(_create);

var _update = __webpack_require__(8);

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadingState() {}

loadingState.prototype.preload = _preload2.default;
loadingState.prototype.create = _create2.default;
loadingState.prototype.update = _update2.default;

exports.default = loadingState;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = create;

var _loadStart = __webpack_require__(6);

var _loadStart2 = _interopRequireDefault(_loadStart);

var _fileComplete = __webpack_require__(4);

var _fileComplete2 = _interopRequireDefault(_fileComplete);

var _loadComplete = __webpack_require__(5);

var _loadComplete2 = _interopRequireDefault(_loadComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create() {

    game.stage.backgroundColor = '#663399';

    game.load.onLoadStart.add(_loadStart2.default, this);
    game.load.onFileComplete.add(_fileComplete2.default, this);
    game.load.onLoadComplete.add(_loadComplete2.default, this);

    window.loadingStateData = {};

    loadingStateData.text = game.add.text(32 * gameScaleBase, 32 * gameScaleBase, 'Loading...', {
        font: String(Math.floor(48 * gameScaleBase)) + 'px Arial',
        fill: '#ffffff'
    });

    game.load.start();
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = fileComplete;
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = loadComplete;
function loadComplete() {

    loadingStateData.text.setText('Complete!');
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadStart;
function loadStart() {}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = preload;
function preload() {

    window.slickUI = game.plugins.add(Phaser.Plugin.SlickUI);
    slickUI.load('assets/kenney-theme/kenney.json');
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = update;
function update() {}

/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(0);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);