import { generateCharacter } from "./utils/generateCharacter";
import { generateError } from "./utils/generateError";
import "./search.js"
import "./filter.js"
import { clearField } from "./search.js";

const app = document.querySelector('#app');
const charactersList = app.querySelector('.characters');
const searchForm = app.querySelector('.search');

let foundedCharacters = []

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    foundedCharacters = [];
    const inputValue = event.target.elements.characterName.value;
    const result = await searchCharacters(inputValue);

    if(Array.isArray(result)) {
        foundedCharacters = result;
    } else {
        generateError(result, charactersList);
        return
    }

    charactersList.innerHTML = ""
    clearField()

    foundedCharacters.forEach(foundedCharacter => {
        generateCharacter(foundedCharacter, charactersList)
    })
});

const baseApi = new URL('https://rickandmortyapi.com/api');
const charactersApi = new URL(`${baseApi.href}/character/?name`);

const searchCharacters = async function (name) {
    let result = null;
    charactersApi.searchParams.set('name', name);

    await fetch(charactersApi).then((response) => {
        return response.json()
    }).then(data => {
        result = data.results ?? data.error;
    });

    return result;
}

export { foundedCharacters, charactersList }