import { generateCharacter } from "./utils/generateCharacter";

const app = document.querySelector('#app');
const charactersList = app.querySelector('.characters');
const searchForm = app.querySelector('.search');


let foundedCharacters = []

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    foundedCharacters = [];
    const inputValue = event.target.elements.characterName.value;
    foundedCharacters = await searchCharacters(inputValue);

    charactersList.innerHTML = ""

    foundedCharacters.forEach(foundedCharacter => {
        generateCharacter(foundedCharacter, charactersList)
    })
});

const baseApi = new URL('https://rickandmortyapi.com/api');
const charactersApi = new URL(`${baseApi.href}/character/?name`);

const searchCharacters = async function (name) {
    let result = [];
    charactersApi.searchParams.set('name', name);

    await fetch(charactersApi).then((response) => {
        return response.json()
    }).then(data => {
        result = data.results;
    });

    return result;
}

const charactersCardsTmpl = function (characterName) {
    return `
    <div>${characterName}</div>
  `
}