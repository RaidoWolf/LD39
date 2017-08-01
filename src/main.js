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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _loading = __webpack_require__(8);

var _loading2 = _interopRequireDefault(_loading);

var _mainMenu = __webpack_require__(15);

var _mainMenu2 = _interopRequireDefault(_mainMenu);

var _playing = __webpack_require__(19);

var _playing2 = _interopRequireDefault(_playing);

var _gameOver = __webpack_require__(7);

var _gameOver2 = _interopRequireDefault(_gameOver);

var _NikolaTeslaCity = __webpack_require__(6);

var _NikolaTeslaCity2 = _interopRequireDefault(_NikolaTeslaCity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// config - window size/scaling
window.targetWidth = 1280; // max-width


// import map
// import states
window.targetHeight = 960; // max-height
window.minimumScale = 0.5; // minimum scale allowed
window.horizontalCutOut = 0; // extra space to leave (horizontal)
window.verticalCutOut = 40; // extra space to leave (vertical)

// globalize state classes
window.loadingState = _loading2.default;
window.mainMenuState = _mainMenu2.default;
window.playingState = _playing2.default;
window.gameOverState = _gameOver2.default;

window.mapNikolaTeslaCity = _NikolaTeslaCity2.default;

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Intersection = function Intersection(options) {
    _classCallCheck(this, Intersection);

    options = typeof options !== 'undefined' ? options : {};
};

exports.default = Intersection;


Intersection.prototype.type = Intersection.TYPE_ENDPOINT;

// intersection type enum
Intersection.TYPE_4WAY = 1; // + shaped (4 roads)
Intersection.TYPE_3WAY = 2; // y shaped (3 roads)
Intersection.TYPE_JOINT = 3; // just a point on a line (two roads)
Intersection.TYPE_ENDPOINT = 4; // end of the line (one road)
Intersection.TYPE_4WAY_NOSTOP = 5; // interstate junction/ramps
Intersection.TYPE_3WAY_NOSTOP = 6; // also interstate junction/ramps

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RepairCrew = __webpack_require__(3);

var _RepairCrew2 = _interopRequireDefault(_RepairCrew);

var _Transaction = __webpack_require__(5);

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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Road = function Road(options) {
    _classCallCheck(this, Road);

    options = typeof options !== 'undefined' ? options : {};
};

exports.default = Road;


Road.prototype.m_speed = 1; // multiplier of "normal speed" whatever that may mean
Road.prototype.m_traffic = 1; // multiplier of "normal traffic" (also whatever that may mean)
Road.prototype.m_startPoint = null; //this should be an "Intersection" id
Road.prototype.m_pathPoints = null; // this should be an array of 2-element arrays of coordinates
Road.prototype.m_endPoint = null; // this should be an "Intersection" id
Road.prototype.m_pattern = Road.PATTERN_LINEAR;
Road.prototype.m_type = Road.TYPE_CITY;

// road pattern enum
Road.PATTERN_LINEAR = 1;
Road.PATTERN_BEZIER = 2;
Road.PATTERN_CATMULL_ROM = 3;

// road type enum
Road.TYPE_INTERSTATE = 1; // multi-lane, high-speed, no full-stop intersections, usually bezier or catmull-rom
Road.TYPE_HIGHWAY = 2; // high-speed, no full-stop intersections, usually bezier or catmull-rom
Road.TYPE_CITY = 3; // normal-speed, frequent 3 or 4-way intersections, usually linear
Road.TYPE_COUNTRY = 4; // normal-speed, occasional 3 or 4-way intersections, always bezier or catmull-rom
Road.TYPE_DIRT = 5; // low-speed, occasional 3 or 4 way intersections, always bezier or catmull-rom

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Intersection = __webpack_require__(1);

var _Intersection2 = _interopRequireDefault(_Intersection);

var _Road = __webpack_require__(4);

var _Road2 = _interopRequireDefault(_Road);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// I drew map by hand and then wrote this up manually (an exercise in frustration)
var nikolaTeslaCity = {

    name: 'Nikola Tesla City',

    width: 1800,
    height: 1500,

    intersections: {
        a: {
            x: 1000,
            y: 200,
            type: _Intersection2.default.TYPE_4WAY_NOSTOP,
            roads: ['interstate-4', 'interstate-1', 'second-1', 'second-2']
        },
        b: {
            x: 1700,
            y: 800,
            type: _Intersection2.default.TYPE_4WAY_NOSTOP,
            roads: ['interstate-1', 'interstate-2', 'g-1', 'g-2']
        },
        c: {
            x: 1000,
            y: 1300,
            type: _Intersection2.default.TYPE_4WAY_NOSTOP,
            roads: ['interstate-2', 'interstate-3', 'second-10', 'second-11']
        },
        d: {
            x: 700,
            y: 700,
            type: _Intersection2.default.TYPE_4WAY_NOSTOP,
            roads: ['interstate-3', 'interstate-4', 'main-3', 'main-4']
        },
        e: {
            x: 1000,
            y: 100,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['a-1', 'a-2', 'second-1']
        },
        f: {
            x: 1000,
            y: 300,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['b-1', 'b-2', 'second-2', 'second-3']
        },
        g: {
            x: 1000,
            y: 1400,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: ['second-11']
        },
        h: {
            x: 1000,
            y: 1100,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['second-9', 'second-10', 'i-1', 'i-2']
        },
        i: {
            x: 4500,
            y: 700,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['main-2', 'main-3', 'scan-1']
        },
        j: {
            x: 800,
            y: 700,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['main-4', 'main-5', 'first-3', 'first-4']
        },
        k: {
            x: 800,
            y: 100,
            type: _Intersection2.default.TYPE_JOINT,
            roads: ['first-1', 'a-1']
        },
        l: {
            x: 800,
            y: 300,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['first-1', 'first-2', 'b-1']
        },
        m: {
            x: 1200,
            y: 300,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['third-1', 'third-2', 'b-2', 'b-3']
        },
        n: {
            x: 1400,
            y: 300,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['fourth-2', 'fourth-3', 'b-3']
        },
        o: {
            x: 1400,
            y: 250,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['fourth-1', 'fourth-2', 'aga-1']
        },
        p: {
            x: 800,
            y: 400,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['first-2', 'first-3', 'c-1']
        },
        q: {
            x: 1000,
            y: 400,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['second-3', 'second-4', 'c-1', 'c-2']
        },
        r: {
            x: 1200,
            y: 400,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['third-2', 'third-3', 'c-2', 'c-3']
        },
        s: {
            x: 1400,
            y: 400,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['fourth-3', 'fourth-4', 'c-3']
        },
        t: {
            x: 1000,
            y: 500,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['second-4', 'second-5', 'd-1']
        },
        u: {
            x: 1200,
            y: 500,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['d-1', 'd-2', 'third-3', 'third-4']
        },
        v: {
            x: 1400,
            y: 500,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['fourth-4', 'fourth-5', 'd-2']
        },
        w: {
            x: 1000,
            y: 600,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['second-5', 'second-6', 'e-1']
        },
        x: {
            x: 1200,
            y: 600,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['third-4', 'third-5', 'e-1', 'e-2']
        },
        y: {
            x: 1400,
            y: 600,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['fourth-5', 'fourth-6', 'e-2']
        },
        z: {
            x: 900,
            y: 700,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['main-5', 'main-6', 'diag']
        },
        aa: {
            x: 1000,
            y: 700,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['second-6', 'second-7', 'main-6', 'main-7']
        },
        ab: {
            x: 1200,
            y: 700,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['third-5', 'third-6', 'main-7', 'main-8']
        },
        ac: {
            x: 1400,
            y: 700,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['fourth-6', 'fourth-7', 'main-8', 'main-9']
        },
        ad: {
            x: 1500,
            y: 750,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['fourth-7', 'fourth-8', 'aga-2']
        },
        ae: {
            x: 800,
            y: 800,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['first-5', 'first-6', 'diag']
        },
        af: {
            x: 1000,
            y: 800,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['second-7', 'second-8', 'g-1']
        },
        ag: {
            x: 1100,
            y: 800,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['g-1', 'g-2', 'fifth-1']
        },
        ah: {
            x: 1200,
            y: 800,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['third-6', 'third-7', 'g-2', 'g-3']
        },
        ai: {
            x: 1300,
            y: 800,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['g-3', 'g-4', 'sixth-1']
        },
        aj: {
            x: 1500,
            y: 800,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['fourth-8', 'fourth-9', 'g-4', 'g-5']
        },
        ak: {
            x: 800,
            y: 950,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['first-6', 'first-7', 'h-1']
        },
        al: {
            x: 1000,
            y: 950,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['second-8', 'second-9', 'h-1', 'h-2']
        },
        am: {
            x: 1100,
            y: 950,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['h-2', 'h-3', 'fifth-1', 'fifth-2']
        },
        an: {
            x: 1200,
            y: 950,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['h-3', 'h-4', 'third-7', 'third-8']
        },
        ao: {
            x: 1300,
            y: 950,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['h-4', 'h-5', 'sixth-1', 'sixth-2']
        },
        ap: {
            x: 1750,
            y: 800,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: ['g-6']
        },
        aq: {
            x: 800,
            y: 1100,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['first-7', 'first-8', 'i-1']
        },
        ar: {
            x: 1000,
            y: 1100,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['second-9', 'second-10', 'i-1', 'i-2']
        },
        as: {
            x: 1100,
            y: 1100,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['fifth-2', 'i-2', 'i-3']
        },
        at: {
            x: 1200,
            y: 1100,
            type: _Intersection2.default.TYPE_4WAY,
            roads: ['third-8', 'third-9', 'i-3', 'i-4']
        },
        au: {
            x: 1300,
            y: 1100,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['sixth-2', 'i-4', 'i-5']
        },
        av: {
            x: 1500,
            y: 1100,
            type: _Intersection2.default.TYPE_3WAY,
            roads: ['fourth-11', 'fourth-12', 'i-5']
        },
        aw: {
            x: 800,
            y: 1400,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: ['first-7']
        },
        ax: {
            x: 1000,
            y: 1400,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: []
        },
        ay: {
            x: 1200,
            y: 1400,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: []
        },
        az: {
            x: 1500,
            y: 1400,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: []
        },
        ba: {
            x: 375,
            y: 450,
            type: _Intersection2.default.TYPE_3WAY,
            roads: []
        },
        bb: {
            x: 210,
            y: 380,
            type: _Intersection2.default.TYPE_3WAY,
            roads: []
        },
        bc: {
            x: 225,
            y: 275,
            type: _Intersection2.default.TYPE_3WAY,
            roads: []
        },
        bd: {
            x: 250,
            y: 600,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: []
        },
        be: {
            x: 80,
            y: 250,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: []
        },
        bf: {
            x: 500,
            y: 250,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: []
        },
        bg: {
            x: 550,
            y: 125,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: []
        },
        bh: {
            x: 375,
            y: 700,
            type: _Intersection2.default.TYPE_3WAY,
            roads: []
        },
        bi: {
            x: 450,
            y: 925,
            type: _Intersection2.default.TYPE_3WAY,
            roads: []
        },
        bj: {
            x: 400,
            y: 1000,
            type: _Intersection2.default.TYPE_3WAY,
            roads: []
        },
        bk: {
            x: 375,
            y: 1025,
            type: _Intersection2.default.TYPE_3WAY,
            roads: []
        },
        bl: {
            x: 400,
            y: 1200,
            type: _Intersection2.default.TYPE_3WAY,
            roads: []
        },
        bm: {
            x: 300,
            y: 1300,
            type: _Intersection2.default.TYPE_3WAY,
            roads: []
        },
        bn: {
            x: 275,
            y: 1225,
            type: _Intersection2.default.TYPE_3WAY,
            roads: []
        },
        bo: {
            x: 275,
            y: 1050,
            type: _Intersection2.default.TYPE_3WAY,
            roads: []
        },
        bp: {
            x: 100,
            y: 950,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: []
        },
        bq: {
            x: 175,
            y: 1000,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: []
        },
        br: {
            x: 160,
            y: 1150,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: []
        },
        bs: {
            x: 100,
            y: 1300,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: []
        },
        bt: {
            x: 130,
            y: 1400,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: []
        },
        bu: {
            x: 250,
            y: 1150,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: []
        },
        bv: {
            x: 425,
            y: 1380,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: []
        },
        bw: {
            x: 650,
            y: 1240,
            type: _Intersection2.default.TYPE_ENDPOINT,
            roads: []
        },
        bx: {
            x: 1500,
            y: 900,
            type: _Intersection2.default.TYPE_3WAY,
            roads: []
        },
        by: {
            x: 1500,
            y: 1200,
            type: _Intersection2.default.TYPE_3WAY,
            roads: []
        },
        bz: {
            x: 1550,
            y: 425,
            type: _Intersection2.default.TYPE_JOINT,
            roads: []
        },
        ca: {
            x: 1600,
            y: 1000,
            type: _Intersection2.default.TYPE_JOINT,
            roads: []
        },
        cb: {
            x: 1500,
            y: 950,
            type: _Intersection2.default.TYPE_3WAY,
            roads: []
        }
    },

    roads: {
        'interstate-1': {
            start: 'a',
            end: 'b',
            path: [{
                x: 1500,
                y: 200
            }, {
                x: 1700,
                y: 400
            }],
            pattern: _Road2.default.PATTERN_CATMULL_ROM,
            type: _Road2.default.TYPE_INTERSTATE,
            speed: 4,
            traffic: 0
        },
        'interstate-2': {
            start: 'b',
            end: 'c',
            path: [{
                x: 1700,
                y: 1100
            }, {
                x: 1500,
                y: 1300
            }],
            pattern: _Road2.default.PATTERN_CATMULL_ROM,
            type: _Road2.default.TYPE_INTERSTATE,
            speed: 4,
            traffic: 0
        },
        'interstate-3': {
            start: 'c',
            end: 'd',
            path: [{
                x: 900,
                y: 1300
            }, {
                x: 700,
                y: 1100
            }],
            pattern: _Road2.default.PATTERN_CATMULL_ROM,
            type: _Road2.default.TYPE_INTERSTATE,
            speed: 4,
            traffic: 0
        },
        'interstate-4': {
            start: 'd',
            end: 'a',
            path: [{
                x: 700,
                y: 400
            }, {
                x: 900,
                y: 200
            }],
            pattern: _Road2.default.PATTERN_CATMULL_ROM,
            type: _Road2.default.TYPE_INTERSTATE,
            speed: 4,
            traffic: 0
        },
        'main-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'main-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'main-3': {
            start: 'i',
            end: 'd',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 2
        },
        'main-4': {
            start: 'd',
            end: 'j',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 3
        },
        'main-5': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'main-6': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'main-7': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'main-8': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'a-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'a-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'a-3': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'b-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'b-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'b-3': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'c-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'c-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'c-3': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'd-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'd-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'e-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'e-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'g-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'g-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'g-3': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'g-4': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'h-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'h-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'h-3': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'h-4': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'h-5': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'i-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'i-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'i-3': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'i-4': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'i-5': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'first-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'first-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'first-3': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'first-4': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'first-5': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'first-6': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'first-7': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-1': {
            start: 'e',
            end: 'a',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-2': {
            start: 'a',
            end: 'f',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1.5
        },
        'second-3': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-4': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-5': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-6': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-7': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-8': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-9': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'second-10': {
            start: 'h',
            end: 'c',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1.5
        },
        'second-11': {
            start: 'c',
            end: 'g',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-3': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-4': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-5': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-6': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-7': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-8': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'third-9': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-3': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-4': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-5': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-6': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-7': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-8': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-9': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-10': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-11': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-12': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fourth-13': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fifth-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'fifth-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'sixth-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'sixth-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'aga-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'aga-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'agb-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'agb-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'diag': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-3': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-a': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-b': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-c-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-c-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-d': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-e-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-e-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-f-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-g-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-g-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'scan-h': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'ncan-1': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'ncan-2': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'ncan-3': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'ncan-a': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'ncan-b': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'ncan-c': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        },
        'ncan-d': {
            start: '',
            end: '',
            pattern: _Road2.default.PATTERN_LINEAR,
            type: _Road2.default.TYPE_CITY,
            speed: 2,
            traffic: 1
        }
    }

};

exports.default = nikolaTeslaCity;

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preload = __webpack_require__(13);

var _preload2 = _interopRequireDefault(_preload);

var _create = __webpack_require__(9);

var _create2 = _interopRequireDefault(_create);

var _update = __webpack_require__(14);

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadingState() {}

loadingState.prototype.preload = _preload2.default;
loadingState.prototype.create = _create2.default;
loadingState.prototype.update = _update2.default;

exports.default = loadingState;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = create;

var _loadStart = __webpack_require__(12);

var _loadStart2 = _interopRequireDefault(_loadStart);

var _fileComplete = __webpack_require__(10);

var _fileComplete2 = _interopRequireDefault(_fileComplete);

var _loadComplete = __webpack_require__(11);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = fileComplete;
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {}

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadStart;
function loadStart() {}

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = update;
function update() {}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preload = __webpack_require__(17);

var _preload2 = _interopRequireDefault(_preload);

var _create = __webpack_require__(16);

var _create2 = _interopRequireDefault(_create);

var _update = __webpack_require__(18);

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mainMenuState() {}

mainMenuState.prototype.preload = _preload2.default;
mainMenuState.prototype.create = _create2.default;
mainMenuState.prototype.update = _update2.default;

exports.default = mainMenuState;

/***/ }),
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = update;
function update() {}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preload = __webpack_require__(21);

var _preload2 = _interopRequireDefault(_preload);

var _create = __webpack_require__(20);

var _create2 = _interopRequireDefault(_create);

var _update = __webpack_require__(22);

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function playingState() {}

playingState.prototype.preload = _preload2.default;
playingState.prototype.create = _create2.default;
playingState.prototype.update = _update2.default;

exports.default = playingState;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = create;

var _PowerCompany = __webpack_require__(2);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = preload;
function preload() {}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = update;
function update() {}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(0);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);