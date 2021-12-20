window.addEventListener('load', () => {
    console.log('vinculacion exitosa');
   

    const qs = (tag) => {
        return document.querySelector(tag)
    }

    const small = document.querySelectorAll(".validation")
    const form = qs(".formEdit")
    const text = qs("textarea")
    const select = qs("select")
    
    const titulo = qs("#titulo")
    const precio = qs("#precio")
    const categorias = qs("#categorias")
    const descripcion = qs("#descripcion")
   
    const inputs = document.querySelectorAll("input")
    const button = qs('.crear')

  console.log(inputs)
  console.log(small)
    
form.addEventListener("submit", (e) => {
    for ( let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            e.preventDefault() 
            inputs[i].classList.remove("is-valid")
            inputs[i].classList.add("is-invalid")
            small[i].innerText = "No puede quedar vacio"
            console.log(small)           
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
})

})