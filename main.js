const nameInput = document.querySelector("#name")
const textParagraph = document.querySelector("#text")

function fillText(text) {
    textParagraph.textContent = text
}

function debounce(delay, func) {
    let timeoutId;


    return function (...args) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => { func.apply(this, args) }, delay)
    }
}

const debounceFillText = debounce(300, fillText)

nameInput.addEventListener("input", (event) => { debounceFillText(text = event.target?.value) })
