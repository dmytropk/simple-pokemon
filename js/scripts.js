var repository = [
    {name: 'Cubone', height: 0.4, abilities: ['Battle-armor, Lightningrod, Rock-head']},
    {name: 'Psyduck', height: 0.8, abilities: ['Damp, Cloud-nine, Swift-swim']},
    {name: 'Pikachu', height: 0.4, abilities: ['Static, Lightningrod']}
];

for (var i = 0; i < repository.length; i++) {
    document.write('<p>' + '<strong>' + repository[i].name + '</strong>' + ' -' + ' Height in meters: ' + repository[i].height + ' - Abilities: ' + repository[i].abilities);
}
