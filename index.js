const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('submit');
const info = document.getElementById('info');
const reset = document.getElementById('reset-btn');
const newId = document.getElementById('newId');

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
        element.setAttribute('id', 'newId')
        element.textContent = results;
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

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'newId'){
          console.log(e);
     }
 });