window.addEventListener('load', () => {
    console.log('vinculacion exitosa');

    const qs = (tag) => {
        return document.querySelector(tag)
    }

 const form = qs("#formV") 
 const nombre = qs("#Nombre")
 const apellido = qs("#apellido")
 const provincia = qs("#provincia")
 const localidad = qs("#localidad")
 const telefono = qs("#telefono")
 const email = qs("#email")
 const password = qs("#Password")
 const password2 = qs("#Password2")
 const image = qs("#image")
 const smallEmail = qs('#smallEmail')
 const smallNombre = qs('#smallNombre')
 const smallApellido = qs('#smallApellido')
 const smallTelefono = qs('#smallTelefono')
 const smallLocalidad = qs('#smallLocalidad')
 const smallProvincia = qs('#smallProvincia')
 const smallPassword = qs('#smallPassword')
 const smallPassword2 = qs('#smallPassword2')
 const inputs =document.querySelectorAll("input")
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
     nombre: false,
     apellido: false,
     telefono: false,
     provincia: false,
     localidad: false,
     email: false,
     password: false,
     password2: false,

 }



nombre.focus();
nombre.addEventListener("input",(e)=>{
    if(e.target.value.length<3){
        nombre.classList.remove("is-valid")
        nombre.classList.add("is-invalid")
        smallNombre.innerHTML= "El Nombre debe tener mas de 3 caracteres"
        smallNombre.classList.add("is-invalid")
        smallNombre.classList.remove("is-validSmall")
        validate.nombre=false

    } else{
        nombre.classList.remove("is-invalid")
        nombre.classList.add("is-valid")
        smallNombre.innerHTML= "Bien!"
        smallNombre.classList.remove("is-invalid")
        smallNombre.classList.add("is-validSmall")
        validate.nombre=true
    }

    funcValidate(validate)
})
apellido.addEventListener("input",(e)=>{
    if(e.target.value.length<3){
        apellido.classList.remove("is-valid")
        apellido.classList.add("is-invalid")
        smallApellido.innerHTML= "El Apellido debe tener al menos 3 caracteres"
        smallApellido.classList.add("is-invalid")
        smallApellido.style.color = "rgb(30, 196, 30)";
        validate.apellido=false

    } else{
        apellido.classList.remove("is-invalid")
        apellido.classList.add("is-valid")
        smallApellido.innerHTML= "Bien!"
        smallApellido.classList.remove("is-invalid")
        smallApellido.classList.add("is-validSmall")
        validate.apellido=true
    }

    funcValidate(validate)
})
telefono.addEventListener("input",(e)=>{
    if(e.target.value.length<=8){
        telefono.classList.remove("is-valid")
        telefono.classList.add("is-invalid")
        smallTelefono.innerHTML= "Debes ingresar un telefono valido"
        smallTelefono.classList.add("is-invalid")
        smallTelefono.style.color = "rgb(30, 196, 30)";
        validate.telefono=false

    } else{ 
        telefono.classList.remove("is-invalid")
        telefono.classList.add("is-valid")
        smallTelefono.innerHTML= "Bien!"
        smallTelefono.classList.remove("is-invalid")
        smallTelefono.classList.add("is-validSmall")
        validate.telefono=true
    }
    funcValidate(validate)
})
provincia.addEventListener("input",(e)=>{
    if(e.target.value === ""){
        provincia.classList.remove("is-valid")
        provincia.classList.add("is-invalid")
        smallProvincia.innerHTML= "Debes elegir una Provincia"
        smallProvincia.classList.add("is-invalid")
        smallProvincia.style.color = "rgb(30, 196, 30)";
        validate.provincia=false

    } else{ 
        provincia.classList.remove("is-invalid")
        provincia.classList.add("is-valid")
        smallProvincia.innerHTML= "Bien!"
        smallProvincia.classList.remove("is-invalid")
        smallProvincia.style.color = "rgb(30, 196, 30)"
        smallProvincia.classList.add("is-validSmall")
        validate.provincia=true
    }
    funcValidate(validate)
})
localidad.addEventListener("input",(e)=>{
    if(e.target.value === ""){
        localidad.classList.remove("is-valid")
        localidad.classList.add("is-invalid")
        smallLocalidad.innerHTML= "Debes elegir una localidad"
        smallLocalidad.classList.add("is-invalid")
        smallLocalidad.style.color = "rgb(30, 196, 30)";
        validate.localidad=false

    } else{ 
        localidad.classList.remove("is-invalid")
        localidad.classList.add("is-valid")
        smallLocalidad.innerHTML= "Bien!"
        smallLocalidad.classList.remove("is-invalid")
        smallLocalidad.style.color = "rgb(30, 196, 30)"
        smallLocalidad.classList.add("is-validSmall")
        validate.localidad=true
    }
    funcValidate(validate)
})
/* email */
email.addEventListener("input",(e)=>{
    if(e.target.value.length<=8){
        email.classList.remove("is-valid")
        email.classList.add("is-invalid")
        smallEmail.innerHTML= "Debes ingresar un email valido"
        smallEmail.classList.add("is-invalid")
        smallEmail.style.color = "rgb(30, 196, 30)";
        
        validate.email=false

    } else{ 
        email.classList.remove("is-invalid")
        email.classList.add("is-valid")
        smallEmail.innerHTML= "Bien!"
        smallEmail.classList.remove("is-invalid")
        smallEmail.classList.add("is-validSmall")
        validate.email=true
    }
    funcValidate(validate)
})

password.addEventListener("input",(e)=>{
    if(e.target.value.length <=8){
        password.classList.remove("is-valid")
        password.classList.add("is-invalid")
        smallPassword.innerHTML= "La contraseña debe tener 8 caracteres"
        smallPassword.classList.add("is-invalid")
        smallPassword.style.color = "rgb(30, 196, 30)";
        validate.password=false

    } else{ 
        password.classList.remove("is-invalid")
        password.classList.add("is-valid")
        smallPassword.innerHTML= "Bien!"
        smallPassword.classList.remove("is-invalid")
        smallPassword.style.color = "rgb(30, 196, 30)"
        smallPassword.classList.add("is-validSmall")
        validate.password=true
    }
    funcValidate(validate)
})

password2.addEventListener("input",(e)=>{
    if(e.target.value.length <=8){
        password2.classList.remove("is-valid")
        password2.classList.add("is-invalid")
        smallPassword2.innerHTML= "La contraseña debe tener 8 caracteres"
        smallPassword2.classList.add("is-invalid")
        smallPassword2.style.color = "rgb(30, 196, 30)";
        validate.password2=false

    } else{ 
        password2.classList.remove("is-invalid")
        password2.classList.add("is-valid")
        smallPassword2.innerHTML= "Bien!"
        smallPassword2.classList.remove("is-invalid")
        smallPassword2.style.color = "rgb(30, 196, 30)"
        smallPassword2.classList.add("is-validSmall")
        validate.password2=true
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

//expreciones para password y mail


});