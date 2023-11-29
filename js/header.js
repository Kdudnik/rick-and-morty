import { generateCharacter } from "./utils/generateCharacter";
import { generateError } from "./utils/generateError";
import { clearField } from "./search.js";
import { searchCharacters } from "./api.js";
import { filters } from "./filter.js";

const charactersList = document.querySelector('.characters');
const searchForm = document.querySelector('.search');
const filterBtn = document.querySelector('[data-navigation="filters"]')

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

filterBtn.addEventListener('click', () => {
    filters.classList.toggle('is--hidden')
})

export { charactersList, foundedCharacters }