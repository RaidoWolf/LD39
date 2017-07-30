export default function loadComplete () {

    loadingStateData.text.setText('Complete!');
    window.setTimeout(function () {
        game.state.start('mainMenu');
    }, 1000);

}
