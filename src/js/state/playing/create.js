import PowerCompany from '../../class/PowerCompany/PowerCompany.js';

export default function create () {

window.playingStateData = {};

playingStateData.environment = game.add.group();
playingStateData.entities = game.add.group();
playingStateData.ui = game.add.group();

window.powerCompany = typeof companyName !== 'undefined' && companyName !== '' ?
    new PowerCompany(companyName) :
    new PowerCompany();

console.log(powerCompany.name);

}
