const searchBar = document.getElementById('search');

function searchBrewery(search){
    const url = `https://api.openbrewerydb.org/breweries/autocomplete?query=${search}`
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
        console.log(data)
    })
};
searchBrewery('new york');

searchBar.addEventListener(onkeyup, event => {
    console.log(event);
});

