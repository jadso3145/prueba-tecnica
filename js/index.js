const botton = document.querySelector("button")

let sliderNum = 5;

document.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const imagen = document.querySelector(".scroll1")

        let distance = imagen.getBoundingClientRect().x - 50
        if (e.target.matches(".left")) {
            if (sliderNum > 0) {
                sliderNum = 6 - 1
                console.log(sliderNum)
                imagen.style.transform = `translateX(${380 + distance}px)`
            }
        }

        if (e.target.matches(".rigth")) {
            if (sliderNumb <= 5) {
                imagen.style.transform = `translateX(${-380 + distance}px)`
            }
        }

        console.log(imagen)
        console.log(distance)
    }
})