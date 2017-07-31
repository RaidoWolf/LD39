export default function loadComplete () {

    if (game.state.current === 'loading') {
        loadingStateData.loadingText.setText('Complete!');
        loadingStateData.loadingIcon.loadTexture('loading-complete');
        window.setTimeout(function () {
            window.loadingStateData = null;
            game.state.start('mainMenu');
        }, 1000);
    }

}
