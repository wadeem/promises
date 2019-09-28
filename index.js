const SW_API = 'https://swapi.co/api/';
const output = document.getElementById('output');
const spinner = document.getElementById('spinner');

fetch(SW_API + 'films').then(response => {
    if (!response.ok) return Promise.reject(new Error('bad request...'));
    output.innerText = 'ok';
    return response.json()
})
    .then(json => getFilms(json)
    )
    .then((text) => {
        output.innerText = text.toString()
    })
    .catch(e => console.error(e))
    .finally(() => spinner.remove());


function getFilms(json) {
    return json.results
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(film => `${film.episode_id} ${film.title}`)
        .join('\n');
}
