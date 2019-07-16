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
            showModal(item);
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
            item.weight = details.weight;
            // item.types = Object.keys(details.types);
        }).catch(function (e) {
            console.error(e);
        });
    }   /* add the details to the item */

// create modal container_______________________________

    function showModal(item) {
        var $modalContainer = document.querySelector('#modal-container');

        $modalContainer.innerHTML = '';     /* clear content */

        var modal = document.createElement('div');
        modal.classList.add('modal');

        var closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'close';     /* close button */

        closeButtonElement.addEventListener('click', hideModal);

        var nameElement = document.createElement('h1');
        nameElement.innerText = item.name;  /* element for name within modal */

        var imageElement = document.createElement('img');
        imageElement.classList.add('modal-img');
        imageElement.setAttribute("src", item.imageUrl); /* image within modal */

        var heightElement = document.createElement('p');
        heightElement.innerText = 'height: ' + item.height;  /* pokemon height */

        var weightElement = document.createElement('p');
        weightElement.innerText = 'weight: ' + item.weight;  /* pokemon weight */

        modal.appendChild(closeButtonElement);
        modal.appendChild(nameElement);
        modal.appendChild(imageElement);
        modal.appendChild(heightElement);
        modal.appendChild(weightElement);
        $modalContainer.appendChild(modal);
        $modalContainer.classList.add('is-visible');
    }
// hide modal container_____________________________________________

    function hideModal() {
        var $modalContainer = document.querySelector('#modal-container');
        $modalContainer.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
        var $modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
            hideModal(); 
        }
    });

    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.addEventListener('click', (e) => {
        var target = e.target;
        if (target === $modalContainer) {
            hideModal();
        }
    });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails:loadDetails,
        showModal: showModal,
        hideModal: hideModal
    };
})();    /* IIFE ends here */

var $pokeUl = document.querySelector('.pokemon-list');

var getAllPokemons = pokemonRepository.getAll();

pokemonRepository.loadList().then(function() {
    getAllPokemons.forEach(function (pokemon){
        pokemonRepository.addListItem (pokemon);
    });
}); /* Catch them all! */