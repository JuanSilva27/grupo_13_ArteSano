window.addEventListener('load', () => {
    console.log('vinculacion exitosa');

    const qs = (tag) => {
        return document.querySelector(tag)
    }

    
    const form = qs('.formLogin')
    const email = qs("#email")
    const smallEmail = qs('small.email')
    const password = qs('#password')
    const smallPassword = qs('small.password')
    const button = qs('.guardar')

    

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

    email.addEventListener('blur', (e) => {
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
    })
    
    email.addEventListener('input', (e) => {
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
    })

    
    password.addEventListener('blur', (e) => {
        if(e.target.value === ""){
            password.classList.add('is-invalid')
            password.classList.remove('is-valid')
            smallPassword.innerHTML = 'Debes ingresar una contraseña'
            smallPassword.style.padding = '8px'
            validate.password = false
        } else{
            password.classList.remove('is-invalid')
            password.classList.add('is-valid')
            smallPassword.innerHTML = ''
            smallPassword.style.padding = ''
            validate.password = true
        }
        funcValidate(validate)
    })

    password.addEventListener('input', (e) => {
        if(e.target.value === ""){
            password.classList.add('is-invalid')
            password.classList.remove('is-valid')
            smallPassword.innerHTML = 'Debes ingresar una contraseña'
            smallPassword.style.padding = '8px'
            validate.password = false
        } else{
            password.classList.remove('is-invalid')
            password.classList.add('is-valid')
            smallPassword.innerHTML = ''
            smallPassword.style.padding = ''
            validate.password = true
        }
        funcValidate(validate)
    })

    form.addEventListener("submit", (e) => {
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(form.email.value)
        console.log(form.email.value);
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
        funcValidate(validate)
    }) 

})