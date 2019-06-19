var repository = [
    {name: 'Cubone', height: 0.4, abilities: ['Battle-armor, Lightningrod, Rock-head']},
    {name: 'Psyduck', height: 0.8, abilities: ['Damp, Cloud-nine, Swift-swim']},
    {name: 'Pikachu', height: 0.4, abilities: ['Static, Lightningrod']}
];

// for (var i = 0; i < repository.length; i++) {
//     document.write('<p>' + '<strong>' + repository[i].name + '</strong>' + ' -' + ' Height in meters: ' + repository[i].height + ' - Abilities: ' + repository[i].abilities);
// }

// Object.keys(repository).forEach(function(property) {
//     document.write('<p>' + '<strong>' + repository[property].name + '</strong>' + ' -' + ' Height in meters: ' + repository[property].height + ' - Abilities: ' + repository[property].abilities);
// });

Object.keys(repository).forEach(function(property) {
    var pokeMon = repository[property];
    document.write('<p>' + '<strong>' + pokeMon.name + '</strong>' + ' -' + ' Height in meters: ' + pokeMon.height + ' - Abilities: ' + pokeMon.abilities);
});
