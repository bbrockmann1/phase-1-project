const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('submit');
const info = document.getElementById('info');
const reset = document.getElementById('reset-btn');
const newId = document.getElementById('newId');

const brewObjs = document.getElementById('brewObjs');
const dynamicLi = document.getElementById('object');

const favBreweriesBox=document.getElementById('favorite-breweries')




function searchBrewery(search){
    const url = `https://api.openbrewerydb.org/breweries/search?query=${search}`
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
        data.map(element => element.name)
        renderResults(data)
    })
    .catch((error) => 
    console.log(error));
    
};


function renderResults(results){
    results.forEach( oneBrewery => {
        const element = document.createElement('li');
        element.setAttribute('id', 'newId')
        element.textContent = oneBrewery.name;
        info.append(element);
        console.log(oneBrewery);

        element.addEventListener('click',function(e){
            if(e.target && e.target.id== 'newId'){
                e.preventDefault()
                
                const dynamicCreate = document.createElement('li');
                dynamicCreate.setAttribute('id', 'object');
                brewObjs.textContent = '';
                brewObjs.append(dynamicCreate);
                brewObjs.textContent=oneBrewery.name
                
                const breweryCity=document.createElement('li')
                breweryCity.textContent=('City: ')+(oneBrewery.city)
                brewObjs.append(breweryCity)

                const breweryState=document.createElement('li');
                breweryState.textContent=('State: ')+(oneBrewery.state)
                brewObjs.append(breweryState)

                const breweryPhone=document.createElement('li')
                breweryPhone.textContent=('Phone number: ')+(oneBrewery.phone)
                brewObjs.append(breweryPhone)

                const breweryWebsite=document.createElement('li')
                breweryWebsite.textContent=('Website: ')+(oneBrewery.website_url)
                brewObjs.append(breweryWebsite)
                
                const favBrewery=document.createElement('button')
                favBrewery.textContent=('♡')
                brewObjs.append(favBrewery)

                favBrewery.addEventListener('click',event => {
                    event.preventDefault()
                    favBrewery.textContent=('♥')

                    const breweriesLiList=document.createElement('li')
                    breweriesLiList.textContent=oneBrewery.name
                    favBreweriesBox.append(breweriesLiList)


                    
                })
            }
        });

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
    window.location.reload();
});
