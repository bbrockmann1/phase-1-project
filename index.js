const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('submit');
const info = document.getElementById('info');
const reset = document.getElementById('reset-btn');
const newId = document.getElementById('newId');

const brewObjs = document.getElementById('brewObjs');
const dynamicLi = document.getElementById('object');

const favBreweriesBox=document.getElementById('favorite-breweries')


// possibly target names by city/brewery name. Right now search is pulling up anything that includes the first two letters

function searchBrewery(search){
    const url = `https://api.openbrewerydb.org/breweries/search?query=${search}`
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
        // const name = data.map(element => element.name)
        // renderResults(name);
        // console.log(data)
        data.map(element => element.name)
        renderResults(data)
    })
    .catch((error) => 
    console.log(error));
    
};

// function secondFetch(search){
//     const url = `https://api.openbrewerydb.org/breweries/${search}`;
//     fetch(url)
//     .then(resp => resp.json())
//     .then(secondEle => {console.log(secondEle)})
// };

function renderResults(results){
    results.forEach( oneBrewery => {
        // info.textContent = '';
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
                //dynamicCreate.textContent = secondFetch('madtree-brewing-cincinnati');
                
                //create a if else statement to make this all one function:
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



//secondFetch(e.target.value)



 //what we need:

 //show object for the name of brewery thats clicked on.
 //display that obj in 'object' id