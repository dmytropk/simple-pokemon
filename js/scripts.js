var pokemonRepository = (function () {
    var repository = [
    {name: 'Cubone', height: 0.4, abilities: ['Battle-armor, Lightningrod, Rock-head']},
    {name: 'Psyduck', height: 0.8, abilities: ['Damp, Cloud-nine, Swift-swim']},
    {name: 'Pikachu', height: 0.4, abilities: ['Static, Lightningrod']}
    ];

    function add(pokemon) {
        repository.push(pokemon);
    }
    
    function getAll() {
        return repository;
    }
    
    return {
        add: add,
        getAll: getAll
    };
})();

var getAllPokemons = pokemonRepository.getAll();    /* Catch them all! */

Object.keys(getAllPokemons).forEach(function(property) {
    var pokeMon = getAllPokemons[property];
    document.write('<p>' + '<strong>' + pokeMon.name + '</strong>' + ' -' + ' Height in meters: ' + pokeMon.height + ' - Abilities: ' + pokeMon.abilities);
});
    