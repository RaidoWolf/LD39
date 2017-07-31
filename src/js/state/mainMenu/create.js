export default function create () {

    var title = game.add.sprite(
        game.world.centerX,
        game.world.centerY - 80 * gameScaleBase,
        'title'
    );

    title.anchor.setTo(0.5, 0.5);
    title.scale.setTo(gameScaleBase * 4, gameScaleBase * 4);

    var panel;
    slickUI.add(panel = new SlickUI.Element.Panel(
        8,
        game.height - 88,
        game.width - 16,
        80
    ));

    var button;
    panel.add(button = new SlickUI.Element.Button(0, 0, 140, 80));
    button.add(new SlickUI.Element.Text(0, 0, 'Play')).center();
    button.events.onInputUp.add(function () {
        game.state.start('playing');
    });

}
