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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _loading = __webpack_require__(5);

var _loading2 = _interopRequireDefault(_loading);

var _mainMenu = __webpack_require__(12);

var _mainMenu2 = _interopRequireDefault(_mainMenu);

var _playing = __webpack_require__(16);

var _playing2 = _interopRequireDefault(_playing);

var _gameOver = __webpack_require__(4);

var _gameOver2 = _interopRequireDefault(_gameOver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// config - window size/scaling
// import states
window.targetWidth = 1280; // max-width
window.targetHeight = 960; // max-height
window.minimumScale = 0.5; // minimum scale allowed
window.horizontalCutOut = 0; // extra space to leave (horizontal)
window.verticalCutOut = 40; // extra space to leave (vertical)

// globalize state classes
window.loadingState = _loading2.default;
window.mainMenuState = _mainMenu2.default;
window.playingState = _playing2.default;
window.gameOverState = _gameOver2.default;

// closure for scaling calculations (maintain aspect ratio, min size, etc.)
(function () {

    var widthScale = 1;
    var heightScale = 1;

    if (window.innerWidth < targetWidth * window.devicePixelRatio) {
        widthScale = (window.innerWidth - window.horizontalCutOut) * window.devicePixelRatio / (targetWidth * window.devicePixelRatio);
    }

    if (window.innerHeight < targetHeight * window.devicePixelRatio) {
        heightScale = (window.innerHeight - window.verticalCutOut) * window.devicePixelRatio / (targetHeight * window.devicePixelRatio);
    }

    if (widthScale < minimumScale) {
        widthScale = minimumScale;
    }

    if (heightScale < minimumScale) {
        heightScale = minimumScale;
    }

    // multiply all dimensions and coordinates by this
    window.gameScaleBase = Math.min(widthScale, heightScale);
})();

// let the games begin
window.game = new Phaser.Game(Math.floor(targetWidth * window.devicePixelRatio * window.gameScaleBase), // game window height
Math.floor(targetHeight * window.devicePixelRatio * window.gameScaleBase), // game window width
Phaser.AUTO, // automatically choose renderer
'game', // initial DOM element (equivalent to selector '#game');
null, false, // disable canvas transparency
false // disable anti-aliasing
);

game.state.add('loading', _loading2.default); // register loading screen state
game.state.add('mainMenu', _mainMenu2.default); // register main menu screen state
game.state.add('playing', _playing2.default); // register main gameplay state
game.state.add('gameOverState', _gameOver2.default); // register game over screen state

game.state.start('loading'); // start loading screen to bootstrap game

exports.default = game;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RepairCrew = __webpack_require__(2);

var _RepairCrew2 = _interopRequireDefault(_RepairCrew);

var _Transaction = __webpack_require__(3);

var _Transaction2 = _interopRequireDefault(_Transaction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PowerCompany = function () {
    function PowerCompany(name, initialWorth) {
        _classCallCheck(this, PowerCompany);

        name = typeof name !== 'undefined' ? name : PowerCompany.generateName();
        initialWorth = typeof initialWorth !== 'undefined' ? initialWorth : 1000000;

        this.name = name;
        this.availableFunds = initialWorth;
    }

    _createClass(PowerCompany, [{
        key: 'earn',
        value: function earn(amount) {

            this.m_queuedTransactions.push(new _Transaction2.default(amount));
            return true;
        }
    }, {
        key: 'spend',
        value: function spend(amount) {

            this.m_queuedTransactions.push(new _Transaction2.default(-amount));
            return true;
        }
    }, {
        key: 'name',
        get: function get() {
            return this.m_name;
        },
        set: function set(value) {
            this.m_name = String(value);
        }
    }, {
        key: 'grossEarnings',
        get: function get() {
            return this.m_grossEarnings;
        },
        set: function set(value) {

            value = Number(value);

            if (isNaN(value)) {
                console.warn('REJECTED: grossEarnings must be a number.');
                return false;
            }

            if (value < 0) {
                value = 0;
            }

            this.m_grossEarnings = Math.floor(value);
        }
    }, {
        key: 'availableFunds',
        get: function get() {
            return this.m_availableFunds;
        },
        set: function set(value) {

            value = Number(value);

            if (isNaN(value)) {
                console.warn('REJECTED: availableFunds must be a number.');
                return false;
            }

            if (value < 0) {
                value = 0;
            }

            this.m_availableFunds = Math.floor(value);
        }
    }, {
        key: 'grossRevenue',
        get: function get() {
            return this.m_grossRevenue;
        },
        set: function set(value) {

            value = Number(value);

            if (isNaN(value)) {
                console.warn('REJECTED: grossRevenue must be a number.');
                return false;
            }

            if (value < 0) {
                value = 0;
            }

            this.m_grossRevenue = Math.floor(value);
        }
    }, {
        key: 'grossLiability',
        get: function get() {
            return this.m_grossLiability;
        },
        set: function set(value) {

            value = Number(value);

            if (isNaN(value)) {
                console.warn('REJECTED: grossLiability must be a number.');
                return false;
            }

            if (value < 0) {
                value = 0;
            }

            this.m_grossLiability = Math.floor(value);
        }
    }, {
        key: 'queuedTransactions',
        get: function get() {
            return this.m_queuedTransactions;
        },
        set: function set(value) {

            if (Array.isArray(value)) {

                for (var i in value) {
                    if (!(value[i] instanceof _Transaction2.default)) {
                        console.warn('REJECTED: All elements of queuedTransactions must be instances of the Transaction class.');
                        return false;
                    }
                }

                this.m_queuedTransactions = value;
            } else {
                console.warn('REJECTED: queuedTransactions must be an array.');
                return false;
            }
        }
    }, {
        key: 'repairCrews',
        get: function get() {
            return this.m_repairCrews;
        },
        set: function set(value) {

            if (Array.isArray(value)) {

                for (var i in value) {
                    if (!(value[i] instanceof _RepairCrew2.default)) {
                        console.warn('REJECTED: All elements of repairCrews must be instances of the RepairCrew class.');
                        return false;
                    }
                }

                this.m_repairCrews = value;
            } else {
                console.warn('REJECTED: repairCrews must be an array.');
                return false;
            }
        }
    }]);

    return PowerCompany;
}();

exports.default = PowerCompany;


PowerCompany.prototype.m_name = 'Untitled Power Company';
PowerCompany.prototype.m_profitMargin = 1.05;
PowerCompany.prototype.m_grossEarnings = 0;
PowerCompany.prototype.m_availableFunds = 0;
PowerCompany.prototype.m_grossRevenue = 0;
PowerCompany.prototype.m_grossLiability = 0;
PowerCompany.prototype.m_queuedTransactions = null;
PowerCompany.prototype.m_repairCrews = null;

PowerCompany.seg1 = ['1337', 'Almighty', 'Beige', 'Blue', 'Chartreuse', 'Earth', 'Flamboyant', 'Furry', 'Green', 'Honorable', 'Imperial', 'Just', 'Legit', 'Lightning', 'Mega', 'Retro', 'Royal', 'Rusty', 'Slippery', 'Speedy', 'Steam-Powered', 'Super', 'The Best', 'The First', 'The Last', 'The Legit', 'Totally Legit', 'Treasonous', 'Undefeatable'];
PowerCompany.seg2 = ['Beach', 'City', 'Dave\'s', 'Destroyer', 'Empire', 'Fox', 'Redneck', 'Foxes', 'Fish', 'Haxor\'s', 'Lake', 'N00b\'s', 'Moon', 'Mountain', 'Not a Scam', 'Overlords', 'Pete\'s', 'Paul\'s', 'Redneck', 'River', 'Spoon', 'Steve\'s', 'Temple', 'Templar', 'Thor\'s', 'Thunder', 'Valley', 'Wolf', 'Wolves'];
PowerCompany.seg3 = ['Power', 'Power Company', 'Electric', 'Electric Company', 'Energy', 'Public Utilities', 'Utilities'];
PowerCompany.generateName = function () {

    return '' + PowerCompany.seg1[Math.floor(Math.random() * PowerCompany.seg1.length)] + ' ' + PowerCompany.seg2[Math.floor(Math.random() * PowerCompany.seg2.length)] + ' ' + PowerCompany.seg3[Math.floor(Math.random() * PowerCompany.seg3.length)];
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RepairCrew = function RepairCrew() {
    _classCallCheck(this, RepairCrew);
};

exports.default = RepairCrew;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transaction = function Transaction() {
    _classCallCheck(this, Transaction);
};

exports.default = Transaction;

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preload = __webpack_require__(10);

var _preload2 = _interopRequireDefault(_preload);

var _create = __webpack_require__(6);

var _create2 = _interopRequireDefault(_create);

var _update = __webpack_require__(11);

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadingState() {}

loadingState.prototype.preload = _preload2.default;
loadingState.prototype.create = _create2.default;
loadingState.prototype.update = _update2.default;

exports.default = loadingState;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = create;

var _loadStart = __webpack_require__(9);

var _loadStart2 = _interopRequireDefault(_loadStart);

var _fileComplete = __webpack_require__(7);

var _fileComplete2 = _interopRequireDefault(_fileComplete);

var _loadComplete = __webpack_require__(8);

var _loadComplete2 = _interopRequireDefault(_loadComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create() {

    window.loadingStateData = {};

    loadingStateData.menu = game.add.group();

    game.stage.backgroundColor = '#083360';

    var graphics = game.add.graphics();
    loadingStateData.menu.add(graphics);

    graphics.moveTo(0, game.world.height / 2 - 100);
    graphics.beginFill('0xffffff', 0.25);
    graphics.drawRect(0, game.world.height / 2 - 100, game.world.width, 100);
    graphics.endFill();

    loadingStateData.loadingText = game.add.text(0, 0, 'Loading...', {
        fill: '#ffffff',
        fontSize: '48px',
        boundsAlignH: 'center',
        boundsAlignV: 'middle'
    });

    loadingStateData.loadingText.setShadow(3, 3, 'rgba(0,0,0,0.75)', 4);

    loadingStateData.loadingText.setTextBounds(0, game.world.height / 2 - 100, game.world.width, 100);

    loadingStateData.loadingIcon = game.add.sprite(game.world.width / 2 - 32, game.world.height / 2 + 48, 'loading-spinner');

    loadingStateData.loadingIcon.animations.add('default');

    loadingStateData.loadingIcon.animations.play('default', 10, true);

    game.load.onLoadStart.add(_loadStart2.default, this);
    game.load.onFileComplete.add(_fileComplete2.default, this);
    game.load.onLoadComplete.add(_loadComplete2.default, this);

    // begin preloading stuff

    window.slickUI = game.plugins.add(Phaser.Plugin.SlickUI);
    slickUI.load('assets/kenney-theme/kenney.json');

    game.load.image('title', 'assets/blackout-title.png');

    game.load.start();
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = fileComplete;
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = loadComplete;
function loadComplete() {

    if (game.state.current === 'loading') {
        loadingStateData.loadingText.setText('Complete!');
        loadingStateData.loadingIcon.loadTexture('loading-complete');
        window.setTimeout(function () {
            window.loadingStateData = null;
            game.state.start('mainMenu');
        }, 1000);
    }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadStart;
function loadStart() {}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = preload;
function preload() {

    game.load.spritesheet('loading-spinner', 'assets/loading-spinner.png', 64, 64);
    game.load.spritesheet('loading-complete', 'assets/loading-complete.png', 64, 64);
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = update;
function update() {}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preload = __webpack_require__(14);

var _preload2 = _interopRequireDefault(_preload);

var _create = __webpack_require__(13);

var _create2 = _interopRequireDefault(_create);

var _update = __webpack_require__(15);

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mainMenuState() {}

mainMenuState.prototype.preload = _preload2.default;
mainMenuState.prototype.create = _create2.default;
mainMenuState.prototype.update = _update2.default;

exports.default = mainMenuState;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = create;
function create() {

    var title = game.add.sprite(game.world.centerX, game.world.centerY + 80 * gameScaleBase, 'title');

    title.anchor.setTo(0.5, 0.5);
    title.scale.setTo(gameScaleBase * 4, gameScaleBase * 4);

    var panel = slickUI.add(new SlickUI.Element.Panel(8, 8, game.width - 16, 80));

    var button = panel.add(new SlickUI.Element.Button(0, 0, 140, 80));
    button.add(new SlickUI.Element.Text(0, 0, 'Play')).center();
    button.events.onInputUp.add(function () {
        game.state.start('playing');
    });

    var nameText = panel.add(new SlickUI.Element.Text(158, 0, 'Power Company Name: (random if blank)'));

    var name = panel.add(new SlickUI.Element.TextField(150, 32, panel.width - 150, 40, 32));
    name.events.onOK.add(function () {
        window.companyName = name.value;
    });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = preload;
function preload() {

    game.load.image('title', 'assets/blackout-title.png');

    window.slickUI = game.plugins.add(Phaser.Plugin.SlickUI);
    slickUI.load('assets/kenney-theme/kenney.json');
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = update;
function update() {}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preload = __webpack_require__(18);

var _preload2 = _interopRequireDefault(_preload);

var _create = __webpack_require__(17);

var _create2 = _interopRequireDefault(_create);

var _update = __webpack_require__(19);

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function playingState() {}

playingState.prototype.preload = _preload2.default;
playingState.prototype.create = _create2.default;
playingState.prototype.update = _update2.default;

exports.default = playingState;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = create;

var _PowerCompany = __webpack_require__(1);

var _PowerCompany2 = _interopRequireDefault(_PowerCompany);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create() {

    window.playingStateData = {};

    playingStateData.environment = game.add.group();
    playingStateData.entities = game.add.group();
    playingStateData.ui = game.add.group();

    window.powerCompany = typeof companyName !== 'undefined' && companyName !== '' ? new _PowerCompany2.default(companyName) : new _PowerCompany2.default();

    console.log(powerCompany.name);
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = preload;
function preload() {}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = update;
function update() {}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(0);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);