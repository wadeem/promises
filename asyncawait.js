const SW_API = 'https://swapi.co/api/';
const out = document.getElementById('output');
const spinner = document.getElementById('spinner');

const fetchAPI = async (endpoint) => {
    try {
        const response = await fetch(SW_API + endpoint);
        if (response.ok) return await response.json();
        throw new Error(':(');
    } catch (e) {
        console.warn(e);
    } finally {
        spinner.remove();
    }
};

const main = async () => {
    const [films, planets] = await Promise.all([
        fetchAPI('films'),
        fetchAPI('planets')
    ]);
    out.innerText = `${films.count} films and ${planets.count} planets`;
};

main();
