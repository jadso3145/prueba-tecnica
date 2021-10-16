const botton = document.querySelector("img")

let sliderNum = 0

document.addEventListener("click", e => {
    if (e.target.matches("img")) {
        const imagen = document.querySelector(".scroll1")

        let distance = imagen.getBoundingClientRect().x - 50
        if (e.target.matches(".left")) {
            if (sliderNum > 0) {
                    sliderNum--;
                    imagen.style.transform = `translateX(${490 + distance}px)`
                    console.log(sliderNum)
                }
        }

        if (e.target.matches(".rigth")) {
            if (sliderNum < 5) {                
                sliderNum++;
                console.log(sliderNum)
                imagen.style.transform = `translateX(${-350 + distance}px)`
            } 
        }

        console.log(imagen)
        console.log(distance)
    }
})


// document.addEventListener("DOMContentLoaded", ()=> {
//     const elemetCorusel = document.querySelectorAll(".carousel")

//     M.Carousel.init(elemetCorusel, {
//         duration: 150,
//     })
// })