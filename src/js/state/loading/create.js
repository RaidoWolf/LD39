import loadStart from './loadStart.js';
import fileComplete from './fileComplete.js';
import loadComplete from './loadComplete.js';

export default function create () {

    window.loadingStateData = {};

    loadingStateData.menu = game.add.group();

    game.stage.backgroundColor = '#083360';

    var graphics = game.add.graphics();
    loadingStateData.menu.add(graphics);

    graphics.moveTo(0, game.world.height / 2 - 100);
    graphics.beginFill('0xffffff', 0.25);
    graphics.drawRect(
        0,
        game.world.height / 2 - 100,
        game.world.width,
        100
    );
    graphics.endFill();

    loadingStateData.loadingText = game.add.text(
        0,
        0,
        'Loading...',
        {
            fill: '#ffffff',
            fontSize: '48px',
            boundsAlignH: 'center',
            boundsAlignV: 'middle'
        }
    );

    loadingStateData.loadingText.setShadow(3, 3, 'rgba(0,0,0,0.75)', 4);

    loadingStateData.loadingText.setTextBounds(
        0,
        game.world.height / 2 - 100,
        game.world.width,
        100
    );

    loadingStateData.loadingIcon = game.add.sprite(
        game.world.height / 2 + 48,
        game.world.width / 2 - 32,
        'loading-spinner'
    );

    loadingStateData.loadingIcon.animations.add('default');

    loadingStateData.loadingIcon.animations.play('default', 10, true);

    game.load.onLoadStart.add(loadStart, this);
    game.load.onFileComplete.add(fileComplete, this);
    game.load.onLoadComplete.add(loadComplete, this);

    // begin preloading stuff

    window.slickUI = game.plugins.add(Phaser.Plugin.SlickUI);
    slickUI.load('assets/kenney-theme/kenney.json');

    game.load.image('title', 'assets/blackout-title.png');

    game.load.start();

}
