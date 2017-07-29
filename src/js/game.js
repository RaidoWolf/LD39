import loadingState from './state/loading.js';
import mainMenuState from './state/mainMenu.js';
import playingState from './state/playing.js';
import gameOverState from './state/gameOver.js';

window.loadingState = loadingState;
window.mainMenuState = mainMenuState;
window.playingState = playingState;
window.gameOverState = gameOverState;

window.game = new Phaser.Game(
    window.innerWidth * window.devicePixelRatio, // game window height
    window.innerHeight * window.devicePixelRatio, // game window width
    Phaser.AUTO, // automatically choose renderer
    '', // initial DOM element (take whole window)
    null,
    false, // disable canvas transparency
    false // disable anti-aliasing
);

game.state.add('loading', loadingState);
game.state.add('mainMenu', mainMenuState);
game.state.add('playing', playingState);
game.state.add('gameOverState', gameOverState);

game.state.start('loading'); // start loading screen to bootstrap game

window.largestDimension =
    window.innerWidth > window.innerHeight ?
        window.innerWidth * window.devicePixelRatio :
        window.innerHeight * window.devicePixelRatio;

window.gameScaleBase = largestDimension / 800;

export default game;
