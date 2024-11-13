
const fetchURL = function(url) {
    console.log(`fetching: ${url}...`, this.firstName)
}

const user = {
    firstName: "bob"
}

function debounce(delay, func) {
    let timeoutId;



    return function (...args) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => { func.apply(this, args) }, delay)
    }
}

const fetching = debounce(delay=300, fetchURL.bind(user))

fetching(1)
fetching(2)
fetching(3)
fetching(4)
fetching(5)
