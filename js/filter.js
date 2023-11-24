import { foundedCharacters, charactersList } from "./main"
import { generateCharacter } from "./utils/generateCharacter"

const filters = document.querySelector('.filters-list')
let activeFilter = null

filters.addEventListener('click', event => {
    if(event.target.tagName !== "A") return
    charactersList.innerHTML = ""
    if(event.target.dataset.filterActive === "true") {
        event.target.dataset.filterActive = ""
        foundedCharacters.forEach(foundedCharacter => {
            generateCharacter(foundedCharacter, charactersList)
        })
        return
    }
    activeFilter ? activeFilter.dataset.filterActive = "" : false
    activeFilter = event.target
    event.target.dataset.filterActive = "true"
    foundedCharacters.forEach(character => {
        let charactersStatus = character.status
        if(charactersStatus.toLowerCase() == activeFilter.innerHTML.toLowerCase()) {
            generateCharacter(character, charactersList)
        }
    })
})