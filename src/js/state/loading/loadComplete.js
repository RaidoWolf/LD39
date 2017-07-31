export default function loadComplete () {

    loadingStateData.loadingText.setText('Complete!');
    window.setTimeout(function () {
        window.loadingStateData = null;
        game.state.start('mainMenu');
    }, 1000);

}
