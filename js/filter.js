import { foundedCharacters, charactersList } from "./header.js"
import { generateCharacter } from "./utils/generateCharacter"

const filters = document.querySelector('.filters')
let activeFilter = ''

filters.addEventListener('click', event => {
    if(event.target.tagName !== "A") return
    charactersList.innerHTML = ""
    filters.querySelectorAll('.filters__el').forEach(el => {
        el.classList.remove('filter--active')
    })
    event.target.classList.add('filter--active')

    setActiveFilter(event.target)
    
    foundedCharacters.forEach(character => {
        let charactersStatus = character.status
        if(charactersStatus.toLowerCase() == activeFilter.toLowerCase()) {
            generateCharacter(character, charactersList)
        }
    })
})

const setActiveFilter = function(newActiveFilterEl) {
    
    if(newActiveFilterEl.dataset.filter === activeFilter) {
        activeFilter = ''
        newActiveFilterEl.classList.remove('filter--active')
        // regenerate all characters
        foundedCharacters.forEach(foundedCharacter => {
            generateCharacter(foundedCharacter, charactersList)
        })
        return
    }
    activeFilter = newActiveFilterEl.dataset.filter
}

filters.addEventListener('click', (event) => {
    if(event.target.dataset.title !== "filter") return

    const triggeredFilter = event.target.closest('.filter')
    triggeredFilter.classList.toggle('filter--active')
})