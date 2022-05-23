let btn = document.getElementById("btn-change-bg")
let bg = document.querySelector('.bg')

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", ]

let color = document.querySelector(".color")


btn.addEventListener('click', () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += colors[getRandomNum()]
        bg.style.backgroundColor = hexColor;
    }

    color.textContent = hexColor;
})

function getRandomNum() {
    return Math.floor(Math.random() * colors.length)
}