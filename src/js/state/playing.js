import preload from './playing/preload.js';
import create from './playing/create.js';
import update from './playing/update.js';

function playingState () {}

playingState.prototype.preload = preload;
playingState.prototype.create = create;
playingState.prototype.update = update;

export default playingState;
