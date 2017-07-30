import loadStart from './loadStart.js';
import fileComplete from './fileComplete.js';
import loadComplete from './loadComplete.js';

export default function create () {

    game.stage.backgroundColor = '#663399';

    game.load.onLoadStart.add(loadStart, this);
    game.load.onFileComplete.add(fileComplete, this);
    game.load.onLoadComplete.add(loadComplete, this);

    window.loadingStateData = {};

    loadingStateData.text = game.add.text(32, 32, 'Loading...', { fill: '#ffffff' });

}
