// import states
import loadingState from './state/loading.js';
import mainMenuState from './state/mainMenu.js';
import playingState from './state/playing.js';
import gameOverState from './state/gameOver.js';

// config - window size/scaling
window.targetWidth = 1280;
window.targetHeight = 960;
window.minimumScale = 0.5;

// globalize state classes
window.loadingState = loadingState;
window.mainMenuState = mainMenuState;
window.playingState = playingState;
window.gameOverState = gameOverState;

// closure for scaling calculations (maintain aspect ratio, min size, etc.)
(function () {

    var widthScale = 1;
    var heightScale = 1;

    if (window.innerWidth < targetWidth * window.devicePixelRatio) {
        widthScale =
            (window.innerWidth * window.devicePixelRatio) /
            (targetWidth * window.devicePixelRatio);
    }

    if (window.innerHeight < targetHeight * window.devicePixelRatio) {
        heightScale =
            (window.innerHeight * window.devicePixelRatio) /
            (targetHeight * window.devicePixelRatio);
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
window.game = new Phaser.Game(
    Math.floor(targetWidth * window.devicePixelRatio * window.gameScaleBase), // game window height
    Math.floor(targetHeight * window.devicePixelRatio * window.gameScaleBase), // game window width
    Phaser.AUTO, // automatically choose renderer
    'game', // initial DOM element (equivalent to selector '#game');
    null,
    false, // disable canvas transparency
    false // disable anti-aliasing
);

game.state.add('loading', loadingState); // register loading screen state
game.state.add('mainMenu', mainMenuState); // register main menu screen state
game.state.add('playing', playingState); // register main gameplay state
game.state.add('gameOverState', gameOverState); // register game over screen state

game.state.start('loading'); // start loading screen to bootstrap game

export default game;
