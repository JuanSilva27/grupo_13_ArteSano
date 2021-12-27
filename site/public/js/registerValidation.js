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
    const inputs = document.querySelectorAll("input")
    const button = qs('.guardar')
    const smallImage = qs("#smallImage")

    //Se deshabilita el botón de iniciar sesión, si los campos cumplen los requisitos se activará
    button.disabled = true
    button.style.backgroundColor = 'gray'
    button.style.borderColor = 'gray'

    const funcValidate = (obj) => {
        let arr = Object.values(validate)
        if (!arr.includes(false)) {
            button.disabled = false
            button.style.backgroundColor = 'var(--rojo)'
            button.style.borderColor = 'var(--bordo)'
        } else {
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
        image: true

    }

    nombre.focus();
    nombre.addEventListener("input", (e) => {
        if (e.target.value.length < 3) {
            nombre.classList.remove("is-valid")
            nombre.classList.add("is-invalid")
            smallNombre.innerHTML = "El Nombre debe tener mas de 3 caracteres"
            smallNombre.classList.add("is-invalidSmall")
            smallNombre.classList.remove("is-validSmall")
            validate.nombre = false

        } else {
            nombre.classList.remove("is-invalid")
            nombre.classList.add("is-valid")
            smallNombre.innerHTML = "Bien!"
            smallNombre.classList.remove("is-invalidSmall")
            smallNombre.classList.add("is-validSmall")
            validate.nombre = true
        }

        funcValidate(validate)
    })
    apellido.addEventListener("input", (e) => {
        if (e.target.value.length < 3) {
            apellido.classList.remove("is-valid")
            apellido.classList.add("is-invalid")
            smallApellido.innerHTML = "El Apellido debe tener al menos 3 caracteres"
            smallApellido.classList.add("is-invalidSmall")
            smallApellido.classList.remove("is-validSmall");
            validate.apellido = false

        } else {
            apellido.classList.remove("is-invalid")
            apellido.classList.add("is-valid")
            smallApellido.innerHTML = "Bien!"
            smallApellido.classList.remove("is-invalidSmall")
            smallApellido.classList.add("is-validSmall")
            validate.apellido = true
        }

        funcValidate(validate)
    })
    telefono.addEventListener("input", (e) => {
        if (e.target.value.length <= 8) {
            telefono.classList.remove("is-valid")
            telefono.classList.add("is-invalid")
            smallTelefono.innerHTML = "Debes ingresar un telefono valido"
            smallTelefono.classList.add("is-invalidSmall")
            smallTelefono.classList.remove("is-validSmall")
            validate.telefono = false

        } else {
            telefono.classList.remove("is-invalid")
            telefono.classList.add("is-valid")
            smallTelefono.innerHTML = "Bien!"
            smallTelefono.classList.remove("is-invalidSmall")
            smallTelefono.classList.add("is-validSmall")
            validate.telefono = true
        }
        funcValidate(validate)
    })
    provincia.addEventListener("input", (e) => {
        if (e.target.value === "") {
            provincia.classList.remove("is-valid")
            provincia.classList.add("is-invalid")
            smallProvincia.innerHTML = "Debes elegir una Provincia"
            smallProvincia.classList.add("is-invalidSmall")
            smallProvincia.classList.remove("is-validSmall")
            validate.provincia = false

        } else {
            provincia.classList.remove("is-invalid")
            provincia.classList.add("is-valid")
            smallProvincia.innerHTML = "Bien!"
            smallProvincia.classList.remove("is-invalidSmall")
            smallProvincia.classList.add("is-validSmall")
            validate.provincia = true
        }
        funcValidate(validate)
    })
    localidad.addEventListener("input", (e) => {
        if (e.target.value === "") {
            localidad.classList.remove("is-valid")
            localidad.classList.add("is-invalid")
            smallLocalidad.innerHTML = "Debes elegir una localidad"
            smallLocalidad.classList.add("is-invalidSmall")
            smallLocalidad.classList.remove("is-validSmall")
            validate.localidad = false

        } else {
            localidad.classList.remove("is-invalid")
            localidad.classList.add("is-valid")
            smallLocalidad.innerHTML = "Bien!"
            smallLocalidad.classList.remove("is-invalidSmall")
            smallLocalidad.classList.add("is-validSmall")
            validate.localidad = true
        }
        funcValidate(validate)
    })
    /* email */
    email.addEventListener("input", (e) => {
        if (e.target.value.length <= 8) {
            email.classList.remove("is-valid")
            email.classList.add("is-invalid")
            smallEmail.innerHTML = "Debes ingresar un email valido"
            smallEmail.classList.add("is-invalidSmall")
            smallEmail.classList.remove("is-validSmall")

            validate.email = false

        } else {
            email.classList.remove("is-invalid")
            email.classList.add("is-valid")
            smallEmail.innerHTML = "Bien!"
            smallEmail.classList.remove("is-invalidSmall")
            smallEmail.classList.add("is-validSmall")
            validate.email = true
        }
        funcValidate(validate)
    })

    password.addEventListener("input", (e) => {
        if (e.target.value.length < 8) {
            password.classList.remove("is-valid")
            password.classList.add("is-invalid")
            smallPassword.innerHTML = "La contraseña debe tener 8 caracteres"
            smallPassword.classList.add("is-invalidSmall")
            smallPassword.classList.remove("is-validSmall")
            validate.password = false

        } else {
            password.classList.remove("is-invalid")
            password.classList.add("is-valid")
            smallPassword.innerHTML = "Bien!"
            smallPassword.classList.remove("is-invalidSmall")
            smallPassword.classList.add("is-validSmall")
            validate.password = true
        }
        funcValidate(validate)
    })

    password2.addEventListener("input", (e) => {
        if (e.target.value.length < 8) {
            password2.classList.remove("is-valid")
            password2.classList.add("is-invalid")
            smallPassword2.innerHTML = "La contraseña debe tener 8 caracteres"
            smallPassword2.classList.add("is-invalidSmall")
            smallPassword2.classList.remove("is-validSmall")
            validate.password2 = false

        } else {
            password2.classList.remove("is-invalid")
            password2.classList.add("is-valid")
            smallPassword2.innerHTML = "Bien!"
            smallPassword2.classList.remove("is-invalidSmall")
            smallPassword2.classList.add("is-validSmall")
            validate.password2 = true
        }
        funcValidate(validate)
    })


    form.addEventListener("submit", (e) => {
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        console.log(form.email.value);
        if (!expReg.test(form.email.value.toLowerCase())) {
            e.preventDefault()
            email.classList.remove('is-valid')
            email.classList.add('is-invalid')
            smallEmail.classList.remove("is-validSmall")
            smallEmail.classList.add("is-invalidSmall")
            smallEmail.innerHTML = 'Direción de correo inválida'
            smallEmail.style.padding = '8px'
            validate.email = false
        } else {
            email.classList.remove('is-invalid')
            email.classList.add('is-valid')
            smallEmail.classList.remove("is-invalidSmall")
            smallEmail.classList.add("is-validSmall")
            smallEmail.innerHTML = ''
            smallEmail.style.padding = ''
            validate.email = true
        }
        funcValidate(validate)




    })


    image.addEventListener("change", () => {
        let regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
        if (!regExExt.exec(image.value)) {
            image.classList.remove("is-valid")
            image.classList.add("is-invalid")
            smallImage.innerHTML = "solo se permiten imagenes"
            smallImage.classList.add("is-invalidSmall")
            smallImage.classList.remove("is-validSmall")
            validate.image = false
        } else {
            image.classList.remove("is-invalid")
            image.classList.add("is-valid")
            smallImage.innerHTML = "Bien!"
            smallImage.classList.remove("is-invalidSmall")
            smallImage.classList.add("is-validSmall")
            validate.image = true

        }

    })

    //expreciones para password y mail
    /* const fetch = require("node-fetch");
    modele.exports = {
        read: (res, req) =>{
            fetch(https://datosgobar.github.io/georef-ar-api/)
            .then(response => response.json())
        }
    } */
    console.log(validate)
});

