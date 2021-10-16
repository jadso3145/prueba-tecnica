const botton = document.querySelector("button")

document.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const imagen = document.querySelector(".scroll1")

        if (e.target.matches(".left")) {
            let distance = imagen.getBoundingClientRect().x - 50
            imagen.style.transform = `translateX(${300 + distance}px)`
            
        }



        console.log(imagen)
        console.log(distance)
    }
})

