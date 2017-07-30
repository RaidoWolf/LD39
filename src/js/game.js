import loadingState from './state/loading.js';
import mainMenuState from './state/mainMenu.js';
import playingState from './state/playing.js';
import gameOverState from './state/gameOver.js';

var targetWidth = 1280;
var targetHeight = 960;
var minimumScale = 0.5;

window.loadingState = loadingState;
window.mainMenuState = mainMenuState;
window.playingState = playingState;
window.gameOverState = gameOverState;

window.largestDimension = Math.max(
    window.innerWidth * window.devicePixelRatio,
    window.innerHeight * window.devicePixelRatio
);

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

window.gameScaleBase = Math.min(widthScale, heightScale);

window.game = new Phaser.Game(
    Math.floor(targetWidth * window.devicePixelRatio * window.gameScaleBase), // game window height
    Math.floor(targetHeight * window.devicePixelRatio * window.gameScaleBase), // game window width
    Phaser.AUTO, // automatically choose renderer
    'game', // initial DOM element (take whole window)
    null,
    false, // disable canvas transparency
    false // disable anti-aliasing
);

game.state.add('loading', loadingState);
game.state.add('mainMenu', mainMenuState);
game.state.add('playing', playingState);
game.state.add('gameOverState', gameOverState);

game.state.start('loading'); // start loading screen to bootstrap game

export default game;
