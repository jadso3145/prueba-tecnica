const botton = document.querySelector("img")
const scroll1 = document.querySelector(".scroll1")
const animado = document.querySelectorAll('.animado');
const menu = document.getElementById("menu")
const nav = document.getElementById("nav")
const menuBg = document.getElementById("menu-bg")

let sliderNum = 0
let isDown = false;
let startX;
let scrollLeft;

////////////////////////// MENU HAMBURGUESA
menu.addEventListener("click", e => {
    menu.classList.toggle("change")
    nav.classList.toggle("change")
    menuBg.classList.toggle("change-bg")
})
////////////////////////// MENU HAMBURGUESA


////////////////////////// ANIMACION POR SCROLL
window.addEventListener('scroll', () => {
    let animacion = document.querySelectorAll(".animado")
    animacion.forEach(item => {
        let positionObj1 = item.getBoundingClientRect().top;
        let pantalla = window.innerHeight / 1.5
        if (positionObj1 < pantalla) {
            item.style.opacity = 1;
            item.style.animation = 'mover 1s ease-out'
        };
    });
});
////////////////////////// ANIMACION POR SCROLL


////////////////////////// SCROLL HORIZONTAL
scroll1.addEventListener("mousedown", (e) => {
    isDown = true
    scroll1.classList.add('active')
    startX = e.pageX - scroll1.offsetLeft;
    scrollLeft = scroll1.scrollLeft
})

scroll1.addEventListener("mouseleave", () => {
    isDown = false
    scroll1.classList.remove('active')
})

scroll1.addEventListener("mouseup", () => {
    isDown = false
    scroll1.classList.remove('active')
})

scroll1.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault()
    const x = e.pageX - scroll1.offsetLeft
    const walk = x - startX
    scroll1.scrollLeft = scrollLeft - walk
})
////////////////////////// SCROLL HORIZONTAL