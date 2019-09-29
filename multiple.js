const SW_API = 'https://swapi.co/api/';
const out = document.getElementById('output');
const spin = document.getElementById('spinner');
const fetchAPI = (endpoint) =>
    fetch(SW_API + endpoint)
        .then(r => r.ok ? r.json() : Promise.reject(new Error('bad endpoint..')));

const promise = Promise.all([
    fetchAPI('films'),
    fetchAPI('planets'),
    fetchAPI('species')
]);

promise.then(([f, p, s]) => {
    out.innerText = `Starwars stats\n${f.count} films, ${p.count} planets and ${s.count} species`
})
    .catch(err => out.innerText = err)
    .finally(() => spin.remove())
