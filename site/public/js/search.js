window.addEventListener('load', () => {
    console.log("vinculacion search exitosa")

    let boton = document.querySelector('.search')
    let input = document.querySelector('.busqueda')

    boton.addEventListener('click', (e) => {
        //Si el buscador está vacío, se hace el preventDefault para evitar que realice la búsqueda.
        //Caso contrario, procede.
        if(input.value === ""){
            e.preventDefault()
        } else {
            boton.submit()
        }
    })
})