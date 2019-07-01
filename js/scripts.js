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
    
    function addListItem(pokemon) {
        var $pokeLi = document.createElement('li');
        var $pokeButton = document.createElement('button');
        $pokeButton.classList.add('button-style');
        $pokeButton.innerHTML = pokemon.name;
        $pokeButton.addEventListener('click', function(event) {
            showDetails(event.target.innerHTML);
        });
        $pokeLi.appendChild($pokeButton);
        $pokeUl.appendChild($pokeLi);
    }  /* Buttons within ul */

    function showDetails(pokemon) {
        console.log(pokemon);              
    }   /* Click and log! */

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();    /* IIFE ends here */

var $pokeUl = document.querySelector('.pokemon-list');

var getAllPokemons = pokemonRepository.getAll();    /* Catch them all! */

getAllPokemons.forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});










 
    

