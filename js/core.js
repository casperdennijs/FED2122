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

let section4 = document.querySelector("#store main > section:nth-of-type(4) ul")
let scrollBtn1 = document.querySelector("#store main > section:nth-of-type(4) button:first-of-type")
let scrollBtn2 = document.querySelector("#store main > section:nth-of-type(4) button:last-of-type")

function scrollLeft() {
    section4.scrollLeft += 333;
    console.log("Left")
}

function scrollRight() {
    section4.scrollLeft -= 333;
    console.log("Right")
}

scrollBtn1.addEventListener("click", scrollRight)
scrollBtn2.addEventListener("click", scrollLeft)
