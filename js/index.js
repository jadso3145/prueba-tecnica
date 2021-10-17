const botton = document.querySelector("img")

const scroll1 = document.querySelector(".scroll1") 
const animado = document.querySelectorAll('.animado');

let sliderNum = 0

let isDown = false;

let startX;

let scrollLeft;





window.addEventListener('scroll', ()=> {
    let  animacion = document.querySelector(".animado")
    let positionObj1 = animacion.getBoundingClientRect().top;
    console.log(positionObj1)
    let pantalla = window.innerHeight/1.5
    if (positionObj1 < pantalla) {
        animacion.style.opacity = 1;
        animacion.style.animation = 'mover 1s ease-out'
    }
});

// document.addEventListener("click", e => {

//     if (e.target.matches(".flecha")) {
//         const imagen = document.querySelector(".image3")

//         let distance = imagen.getBoundingClientRect().x - 50
//         if (e.target.matches(".left")) {
//             if (sliderNum > 0) {
//                 sliderNum--;
//                 imagen.style.transform = `translateX(${380 + distance}px)`
//                 console.log(sliderNum)
//             } else {
//                 // imagen.style.transform = `translateX(${1900}px)`
//             }
//         }
//         if (e.target.matches(".rigth")) {
//             if (sliderNum < 5) {
//                 sliderNum++;
//                 console.log(sliderNum)
//                 imagen.style.transform = `translateX(${-290 + distance}px)`
//             } else {
//                 // imagen.style.transform = `translateX(${0}px)`
//             }
//         }
//     }
// })

scroll1.addEventListener("mousedown", (e) => {
    isDown = true
    scroll1.classList.add('active')
    startX = e.pageX - scroll1.offsetLeft;
    scrollLeft = scroll1.scrollLeft
    console.log(startX)
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
    console.log(walk)
})





