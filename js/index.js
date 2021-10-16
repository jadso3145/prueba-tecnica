const botton = document.querySelector("button")

document.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const imagen = document.querySelector(".image3")

        imagen.style.transform = "translateX(400px)"

        console.log(imagen)
    }
})

