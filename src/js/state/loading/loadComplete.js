export default function loadComplete () {

    loadingStateData.loadingText.setText('Complete!');
    loadingStateData.loadingIcon.loadTexture('loading-complete');
    window.setTimeout(function () {
        window.loadingStateData = null;
        game.state.start('mainMenu');
    }, 1000);

}
