const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('submit');
const info = document.getElementById('info');
const reset = document.getElementById('reset-btn');



function searchBrewery(search){
    const url = `https://api.openbrewerydb.org/breweries/search?query=${search}`
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
        const name = data.map(element => element.name)
        renderResults(name);
    })
    .catch((error) => 
    console.log(error));
};

function renderResults(results){
    results.forEach( results => {
        // info.textContent = '';
        const element = document.createElement('li');
        element.textContent = results;
        info.append(element);
    })
};



searchButton.addEventListener('click', e => {
    e.preventDefault();
    searchBrewery(searchBar.value);
});

searchBar.addEventListener('onkeyup', () => {
    e.preventDefault();
    searchBrewery(searchBar.value);
});


reset.addEventListener('click', event => {
    // info.textContent = '';
    // searchBar.value.textContent = '';
    window.location.reload();
});

//stupuid change