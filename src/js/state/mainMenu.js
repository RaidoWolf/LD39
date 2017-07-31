import preload from './mainMenu/preload.js';
import create from './mainMenu/create.js';
import update from './mainMenu/update.js';

function mainMenuState () {}

mainMenuState.prototype.preload = preload;
mainMenuState.prototype.create = create;
mainMenuState.prototype.update = update;

export default mainMenuState;
