window.addEventListener('load', () => {
    console.log('vinculacion exitosa');

    const qs = (tag) => {
        return document.querySelector(tag)
    }

    
    const email = qs("#email")
    const smallEmail = qs('small.email')
    const password = qs('#password')
    const smallPassword = qs('small.password')
    const button = qs('.guardar')
    const form = qs("#formLogin")
    

    //Se deshabilita el botón de iniciar sesión, si los campos cumplen los requisitos se activará
    button.disabled = true
    button.style.backgroundColor = 'gray'
    button.style.borderColor = 'gray'
    
    const funcValidate = (obj) => {
        let arr = Object.values(validate)
        if(!arr.includes(false)){
            button.disabled= false
            button.style.backgroundColor = 'var(--rojo)'
            button.style.borderColor = 'var(--bordo)'
        } else{
            button.disabled = true
            button.style.backgroundColor = 'gray'
            button.style.borderColor = 'gray'
        }
    }
    
    const validate = {
        email: false,
        password: false
    }
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


    email.addEventListener('input', (e) => {
        switch(true){
            case !e.target.value:
                email.classList.add('is-invalid')
                email.classList.remove('is-valid')
                smallEmail.innerHTML = 'Debes ingresar un email'
                smallEmail.classList.add("is-invalidSmall")
                smallEmail.classList.remove("is-validSmall")
                validate.email = false
                break
            case !expReg.test(e.target.value.toLowerCase()):
                email.classList.add('is-invalid')
                email.classList.remove('is-valid')
                smallEmail.innerHTML = 'Debes ingresar un email valido'
                smallEmail.classList.add("is-invalidSmall")
                smallEmail.classList.remove("is-validSmall")
                validate.email = false
                break
            default:
                email.classList.remove('is-invalid')
                email.classList.add('is-valid')
                smallEmail.innerHTML = 'Bien!'
                smallEmail.classList.remove("is-invalidSmall")
                smallEmail.classList.add("is-validSmall")
                validate.email = true
                break

        }


        /* if(e.target.value === ""){
            email.classList.add('is-invalid')
            email.classList.remove('is-valid')
            smallEmail.innerHTML = 'Debes ingresar un email'
            smallEmail.style.padding = '8px'
            validate.email = false
        } else if (esValido == false){
            if(esValido == false){
                e.preventDefault()
                email.classList.add('is-invalid')
                email.classList.remove('is-valid')
                smallEmail.innerHTML = 'Direción de correo inválida'
                smallEmail.style.padding = '8px'
                validate.email = false
            } else {
                email.classList.remove('is-invalid')
                email.classList.add('is-valid')
                smallEmail.innerHTML = ''
                smallEmail.style.padding = ''
                validate.email = true
                }
        } else{
            email.classList.remove('is-invalid')
            email.classList.add('is-valid')
            smallEmail.innerHTML = ''
            smallEmail.style.padding = ''
            validate.email = true
        } */
        funcValidate(validate)

        
    })
    
/*     email.addEventListener('input', (e) => {
        if(e.target.value === ""){
            email.classList.add('is-invalid')
            email.classList.remove('is-valid')
            smallEmail.innerHTML = 'Debes ingresar un email'
            smallEmail.style.padding = '8px'
            validate.email = false
        } else{
            email.classList.remove('is-invalid')
            email.classList.add('is-valid')
            smallEmail.innerHTML = ''
            smallEmail.style.padding = ''
            validate.email = true
        }
        funcValidate(validate)
    }) */

    

    password.addEventListener('input', (e) => {

        switch(true){
            case !e.target.value:
                password.classList.add('is-invalid')
                password.classList.remove('is-valid')
                smallPassword.innerHTML = 'Debes ingresar una contraseña'
                smallPassword.classList.add("is-invalidSmall")
                smallPassword.classList.remove("is-validSmall")
                validate.password = false
                break
            case e.target.value.length<8:
                password.classList.add('is-invalid')
                password.classList.remove('is-valid')
                smallPassword.innerHTML = 'La contraseña debe tener 8 digitos como minimo'
                smallPassword.classList.add("is-invalidSmall")
                smallPassword.classList.remove("is-validSmall")
                validate.password = false
                break
            default:
                password.classList.remove('is-invalid')
                password.classList.add('is-valid')
                smallPassword.innerHTML = 'Bien!'
                smallPassword.classList.remove("is-invalidSmall")
                smallPassword.classList.add("is-validSmall")
                validate.password = true
                break
        }
        funcValidate(validate)
    })

})