const botton = document.querySelector("img")

let sliderNum = 0

document.addEventListener("click", e => {
    if (e.target.matches("img")) {
        const imagen = document.querySelector(".scroll1")

        let distance = imagen.getBoundingClientRect().x - 50
        if (e.target.matches(".left")) {
            if (sliderNum > -1) { 
                sliderNum--;
                imagen.style.transform = `translateX(${360 + distance}px)`
                console.log(sliderNum)
            } else {
                imagen.style.transform = `translateX(${0}px)`
            }
        }

        if (e.target.matches(".rigth")) {
            if (sliderNum < 5) {
                sliderNum++;
                console.log(sliderNum)
                imagen.style.transform = `translateX(${-290 + distance}px)`
            } 
            
        }
    }
})


console.log(sliderNum)
