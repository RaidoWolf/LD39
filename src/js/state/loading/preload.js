export default function preload () {

    window.slickUI = game.plugins.add(Phaser.Plugin.SlickUI);
    slickUI.load('assets/kenney-theme/kenney.json');

    game.load.image('title', 'assets/blackout-title.png');
    game.load.spritesheet('loading-spinner', 'assets/loading-spinner.png', 64, 64);
    game.load.spritesheet('loading-complete', 'assets/loading-complete.png', 64, 64);

}
