const out = document.getElementById('output');
const spin = document.getElementById('spinner');
const SWAPI = 'https://swapi.co/api/';
const fetchAPI = (endpoint) => {
    return fetch(SWAPI + endpoint)
        .then(res => {
            return res.ok ? res.json() : Promise.reject(new Error('bad request'));
        })
};

const results = Promise.all([
    fetchAPI('films'),
    fetchAPI('planets')
]);

results.then(([f, p]) => {
    out.innerText = `${f.count} films ${p.count} planets`;
}).finally(() => spin.remove());
