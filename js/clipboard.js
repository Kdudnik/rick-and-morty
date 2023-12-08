const clipboardModal = document.querySelector('.clipboard-modal')

const setClipboardEvent = function() {
    const clipboardEls = document.querySelectorAll('[data-clipboard=""] .card__link')
    clipboardEls.forEach(el => {
        el.addEventListener('click', (event) => {
            navigator.clipboard.writeText(event.target.innerHTML)
            showClipboardModal()
        })
    })
}

const showClipboardModal = function() {
    clipboardModal.classList.add('clipboard-modal--active')
    clipboardModal.addEventListener('animationend', () => {
        clipboardModal.classList.remove('clipboard-modal--active')
    })
}

export { setClipboardEvent }