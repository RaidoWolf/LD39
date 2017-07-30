import preload from './loading/preload.js';
import create from './loading/create.js';
import update from './loading/update.js';

function loadingState () {}

loadingState.prototype.preload = preload;
loadingState.prototype.create = create;
loadingState.prototype.update = update;

export default loadingState;
