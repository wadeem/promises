console.log('hello world!');

const SW_API = 'https://swapi.co/api/';
const output = document.getElementById('output');

fetch(SW_API + 'films')
    .then(
        response => {
            // if (!response.ok) throw new Error('error accessing the resource');
            return response.json()
                .then(films => {
                    output.innerText = processResults(films.results);
                });
        },
    ).catch(error => {
    console.warn(error);
    output.innerText = ':(';
});

function processResults(films) {
    return films
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(film => `${film.episode_id} ${film.title} ${film.release_date}`)
        .join('\n');
}
