const searchBtn = document.querySelector('.search__btn')
const searchField = document.querySelector('.search__field')
searchField.addEventListener('keyup', () => {
    searchBtn.classList.remove('search__btn--active')
    if(searchField.value.length) searchBtn.classList.add('search__btn--active')
    else return
})

const clearField = function() {
    searchField.value = ""
    searchBtn.classList.remove('search__btn--active')
}

export { clearField }