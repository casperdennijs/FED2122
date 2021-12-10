let menu = document.querySelector("#menu")
let button = document.querySelector("#button")
let details = document.querySelectorAll("details")

function openMenu() {
    menu.classList.toggle("menuOpen")
}

button.addEventListener("click", openMenu)

if (window.screen.width > 832) {
    for (let i = 0; i < details.length; i++) {
        details[i].open = true;
    }
} else {
    for (let i = 0; i < details.length; i++) {
        details[i].open = false;
    }
}