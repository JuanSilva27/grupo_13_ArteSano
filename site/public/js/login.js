window.addEventListener('load', () => {

    const iconEye = document.querySelector('.icon-eye') 

    const password = document.querySelector('#Password')
    

    iconEye.addEventListener('click', () => {
        const icon = document.getElementById('icon')
            
        console.log(icon);

        if (password.type === "password"){
            password.type = "text"
            icon.classList.remove('fa-eye-slash')
            icon.classList.add('fa-eye')
        } else {
            password.type = "password"
            icon.classList.remove('fa-eye')
            icon.classList.add('fa-eye-slash')
        }
    })


    const iconEye2 = document.querySelector('.icon-eye2')
    
    const password2 = document.querySelector('#Password2')


    iconEye2.addEventListener('click', () => {
        const icon2 = document.getElementById('icon2')

        if (password2.type === "password"){
            password2.type = "text"
            icon2.classList.remove('fa-eye-slash')
            icon2.classList.add('fa-eye')
        } else {
            password2.type = "password"
            icon2.classList.remove('fa-eye')
            icon2.classList.add('fa-eye-slash')
        }
    })
})