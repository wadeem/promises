const SW_API = 'https://swapi.co/api/';
const out = document.getElementById('output');
const spin = document.getElementById('spinner');
const fetchAPI = (endpoint) =>
    fetch(SW_API + endpoint).then(r => r.ok ? r.json() : Promise.reject('err..'));

const promise = Promise.all([
    fetchAPI('films'),
    fetchAPI('planets'),
    fetchAPI('species')
]);

promise.then(arr => {
    out.innerText =
        `${arr[0].count} films, 
         ${arr[1].count} planets 
         ${arr[2].count} species`;
    console.log(arr.length, 'requests successfully finished');
}).finally(() => spin.remove());
