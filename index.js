const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('submit');
const info = document.getElementById('info');
const reset = document.getElementById('reset-btn');


// possibly target names by city/brewery name. Right now search is pulling up anything that includes the first two letters

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

        element.setAttribute("id","newId")

        info.append(element);

    })
    
};


//possibly create a submit

searchButton.addEventListener('click', e => {
    e.preventDefault();
    searchBrewery(searchBar.value);
});

searchBar.addEventListener('onkeyup', () => {
    e.preventDefault();
    searchBrewery(searchBar.value);
    //dealay feature, or add so that it takes in more characters in search query
});


reset.addEventListener('click', event => {
    // info.textContent = '';
    // searchBar.value.textContent = '';
    window.location.reload();
});

//create event listener that clicks on names, and opens object in moreinfo.
//first create elements for each key in objs
//