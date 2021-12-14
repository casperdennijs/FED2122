let menu = document.querySelector("nav section:nth-of-type(2)")
let button = document.querySelector("nav section:first-of-type ul li:first-of-type")
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