window.addEventListener('load', () => {
    console.log('validacion de images.js exitosa');

    const $ = id => document.getElementById(id)

    /* imagen previa del producto */

    $("image").addEventListener('change', (e) => {


        for (let i=0; i<3;i++){
            let reader = new FileReader()
            reader.readAsDataURL(e.target.files[i]);
            reader.onload = () => $(`img-preview${i}`).src = reader.result
        }
 
        
    
    })

})