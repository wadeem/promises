console.log('output');

const output = document.getElementById('output');
let list = null;
const starWarsURL = 'https://swapi.co/api/films';

const promise = fetch(starWarsURL);
console.log(promise);

const films = promise.then(response => response.json()).then(result => {
    list = result.results;
    console.log(`returned from future list ${list}`);

    list
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(film => {
            console.log(`${film.episode_id} ${film.title}`)
        });
});
console.log(`immediate result of list=${list}`);
