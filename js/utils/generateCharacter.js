const generateCharacter = function (characterObj, generateTo) {
    console.log(characterObj)
    const tmpl = `<a href="#" class="card">
                    <div class="card__avatar__wrapper">
                        <img src="${characterObj.image}" alt="" class="card__avatar">
                    </div>
                    <div class="character">
                        <div class="info">
                        <h6 class="info__title">${characterObj.name}</h6>
                        <div class="info__status status" data-health="${characterObj.status.toLowerCase()}">
                            <div class="status__dot"></div>
                            ${characterObj.status.charAt(0).toUpperCase() + characterObj.status.slice(1)} - ${characterObj.species}
                        </div>
                        </div>
                        <div class="location">
                            <span class="location__title">Last known location:</span>
                            <span class="location__name">${characterObj.location.name.charAt(0).toUpperCase() + characterObj.location.name.slice(1)}</span>
                        </div>
                        <div class="origin">
                            <span class="location__title">First seen in:</span>
                            <span class="location__name">${characterObj.origin.name.charAt(0).toUpperCase() + characterObj.origin.name.slice(1)}</span>
                        </div>
                    </div>
                  </a>`
    generateTo.insertAdjacentHTML('beforeend', tmpl)
}

export { generateCharacter }