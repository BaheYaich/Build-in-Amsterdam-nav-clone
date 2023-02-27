const navButton = document.querySelector("#navToggle")

const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

navButton.addEventListener('mouseup', () => {
    setTimeout(() => {
        navButton.blur()
    },100)
})
