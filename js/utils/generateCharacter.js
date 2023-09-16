const generateCharacter = function (characterObj, generateTo) {
    // BEM - block card, element - card__link, mod - list list--second, 
    // <a class="link link--green card__link">
    const tmpl = `
        <div class="card">
            <a href="#" class="card__link absolute"></a>
            <figure class="card__figure">
                <img src="${characterObj.image}" alt="" class="card__avatar">
            </figure>
            <div class="card__description">
                <div class="card__info">
                    <h6 class="card__title">
                        <a href="#" class="card__link">${characterObj.name}</a>
                    </h6>
                    <div class="status card__status" data-health="${characterObj.status.toLowerCase()}">
                        <div class="status__dot"></div>
                        ${characterObj.status.charAt(0).toUpperCase() + characterObj.status.slice(1)} - ${characterObj.species}
                    </div>
                </div>
                <div class="card__row">
                    <span class="title">Last known location:</span>
                    <span class="text">${characterObj.location.name.charAt(0).toUpperCase() + characterObj.location.name.slice(1)}</span>
                </div>
                <div class="card__row">
                    <span class="title">First seen in:</span>
                    <span class="text">${characterObj.origin.name.charAt(0).toUpperCase() + characterObj.origin.name.slice(1)}</span>
                </div>
            </div>
        </div>
    `
    generateTo.insertAdjacentHTML('beforeend', tmpl)
}

export { generateCharacter }