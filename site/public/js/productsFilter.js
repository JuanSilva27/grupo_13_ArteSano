window.addEventListener('load', () => {
    console.log('vinculacion products exitosa');

    let select = document.querySelector('.categorias')

    let section = document.querySelector('#pdtos-container')

    select.addEventListener('change', () => {
        fetch( `http://localhost:3000/api/products?categoria=${select.value}`)
        .then(response=>{
           return response.json()
        })
        .then(productos => {
            console.log(productos);
            section.innerHTML = ''
            productos.data.forEach(producto => {
                section.innerHTML += `
                <article class="pdto">
                            <div class="img-container">
                                <div class="photo">
                                    <a href="/products/detail/${producto.id} "> <img
                                            src='/img/products/${producto.productosIm[0].nombre}' width="100%"
                                            alt="${producto.titulo}" /></a>
                                </div>
                            </div>
                            <div class="description">
                                <div class="categoria">
                                    <h3 class="subt">
                                        ${producto.nombre}
                                    </h3>
                                    <i class="fas fa-regular fa-heart"></i>
                                </div>

                                <h2 class="subtprecio">
                                    $ ${producto.precio} 
                                </h2>
                                <p>
                                    ${producto.descripcion} 
                                </p>
                            </div>
                        </article>
                `
            });

        })
    })
})