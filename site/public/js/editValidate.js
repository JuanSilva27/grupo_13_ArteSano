window.addEventListener('load', () => {
    console.log('vinculacion exitosa');


    const qs = (tag) => {
        return document.querySelector(tag)
    }

    const small = document.querySelectorAll(".validation")
    const form = qs(".formEdit")
    const text = qs("textarea")
    const select = qs("select")
    const img = qs("#image")
const smallTitulo = qs("#smallTitulo")

    const titulo = qs("#titulo")
    const precio = qs("#precio")
    const categorias = qs("#categorias")
    const descripcion = qs("#descripcion")
    const smallText = qs("#smallDescripcion")

    const inputs = [titulo, precio]
    const button = qs('.crear')


    form.addEventListener("submit", (e) => {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "") {
                e.preventDefault()
                inputs[i].classList.remove("is-valid")
                inputs[i].classList.add("is-invalid")
                small[i].innerText = "No puede quedar vacio"
                small[i].classList.remove("is-validSmall")
                small[i].classList.add("is-invalidSmall")
            } else if (inputs[i].classList.contains("is-invalid")) {
                inputs[i].classList.remove("is-invalid")
                inputs[i].classList.add("is-valid")
                small[i].innerText = "Campo completado correctamente"
                small[i].classList.remove("is-invalidSmall")
                small[i].classList.add("is-validSmall")
            }
        }

        if(titulo.value.length < 5) {
            e.preventDefault()
            titulo.classList.remove("is-valid")
            titulo.classList.add("is-invalid")
            smallTitulo.innerText = "El titulo debe contener mas de 5 caracteres"
            smallTitulo.classList.remove("is-validSmall")
            smallTitulo.classList.add("is-invalidSmall")
        } else if (titulo.classList.contains("is-invalid")) {
            titulo.classList.remove("is-invalid")
            titulo.classList.add("is-valid")
            smallTitulo.innerText = "Campo completado correctamente"
            smallTitulo.classList.remove("is-invalidSmall")
            smallTitulo.classList.add("is-validSmall")
        }
    

        if (text.value.length < 20) {
            e.preventDefault()
            text.classList.remove("is-valid")
            text.classList.add("is-invalid")
            smallText.innerText = "La descripcion debe tener mas de 20 caracteres"
            smallText.classList.remove("is-validSmall")
            smallText.classList.add("is-invalidSmall")
        } else if (text.classList.contains("is-invalid")) {
            text.classList.remove("is-invalid")
            text.classList.add("is-valid")
            smallText.innerText = "Campo completado correctamente"
            smallText.classList.remove("is-invalidSmall")
            smallText.classList.add("is-validSmall")
        }
    })

})