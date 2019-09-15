console.log('hello world!');

//#region setup start
const SW_API = 'https://swapi.co/api/';
const output = document.getElementById('output');
const spinner = document.getElementById('spinner');

const processTitles = (films) => {
    return films
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(film => `${film.episode_id} ${film.title} ${film.release_date}`)
        .join('\n');
};
//#region setup end

fetch(SW_API + 'flms')
    .then(response => {
        if (!response.ok) throw new Error('bad response');
        return response.json();
    })
    .then(json => {
        const titles = processTitles(json.results);
        output.innerText = titles;
        return json.results;
    })
    .catch(error => {
        output.innerText = error;
        return [];
    })
    .finally(() => {
        spinner.remove();
    })
    .then(films => console.log(films));



