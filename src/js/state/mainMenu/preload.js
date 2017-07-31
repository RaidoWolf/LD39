export default function preload () {

    game.load.image('title', 'assets/blackout-title.png');

    window.slickUI = game.plugins.add(Phaser.Plugin.SlickUI);
    slickUI.load('assets/kenney-theme/kenney.json');

}
