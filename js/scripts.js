var pokemonRepository = (function () {
    var repository = [];
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function loadList() {
        return fetch(apiUrl, {
            method: 'GET'
       }).then(function (response) {
            return response.json();
            }).then(function (json) {
            json.results.forEach(function (item) {
                var pokemon = {
                name: item.name,
                detailsUrl: item.url
                };
            add(pokemon);
            });
        }).catch(function (e) {
          console.error(e);
        })
    }   /* fetch  */

    function addListItem(pokemon) {
        var $pokeLi = document.createElement('li');
        var $pokeButton = document.createElement('button');
        $pokeButton.classList.add('button-style');
        $pokeButton.innerHTML = pokemon.name;
        $pokeButton.addEventListener('click', function(event) {
            showDetails(pokemon);
        });
        $pokeLi.appendChild($pokeButton);
        $pokeUl.appendChild($pokeLi);
    }  /* Buttons within ul */

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            console.log(item);
        });
    }   /* Click and log! */

    function add(item) {
        repository.push(item);
    }
    
    function getAll() {
        return repository;
    }

    function loadDetails(item) {
        var url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = Object.keys(details.types);
        }).catch(function (e) {
            console.error(e);
        });
    }  /* add the details to the item */

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails:loadDetails
    };
})();    /* IIFE ends here */

var $pokeUl = document.querySelector('.pokemon-list');

var getAllPokemons = pokemonRepository.getAll();

pokemonRepository.loadList().then(function() {
    getAllPokemons.forEach(function (pokemon){
        pokemonRepository.addListItem (pokemon);
    });
}); /* Catch them all! */