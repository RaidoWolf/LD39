export default function create () {

    var title = game.add.sprite(
        game.world.centerX,
        game.world.centerY + 80 * gameScaleBase,
        'title'
    );

    title.anchor.setTo(0.5, 0.5);
    title.scale.setTo(gameScaleBase * 4, gameScaleBase * 4);

    var panel = slickUI.add(new SlickUI.Element.Panel(
        8,
        8,
        game.width - 16,
        80
    ));

    var button = panel.add(new SlickUI.Element.Button(0, 0, 140, 80));
    button.add(new SlickUI.Element.Text(0, 0, 'Play')).center();
    button.events.onInputUp.add(function () {
        game.state.start('playing');
    });

    var nameText = panel.add(new SlickUI.Element.Text(158, 0, 'Power Company Name: (random if blank)'));

    var name = panel.add(new SlickUI.Element.TextField(150, 32, panel.width - 150, 40, 32));
    name.events.onOK.add(function () {
        window.companyName = name.value;
    });

}
