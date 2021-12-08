const {check} = require("express-validator")
module.exports=[
    check("Nombre")
        .notEmpty().withMessage("Debes completar este campo").bail(),
    check("Apellido")
        .notEmpty().withMessage("Debes completar este campo").bail(),
    check("telefono")
        .notEmpty().withMessage("Debes completar este campo").bail(),
    check("provincia")
        .notEmpty().withMessage("Debes seleccionar una provincia"),
    check("localidad")
        .notEmpty().withMessage("Debes seleccionar una localidad"),
    check("email")
        .isEmail().withMessage("Tienes que completar el campo con un Email valido").bail(),
    check("password")
        .notEmpty().withMessage("Debes completar este campo").bail()
        .isLength({min: 6}).withMessage("La contraseña debe contener 6 caracteres") ,
    check("password2")
        .notEmpty().withMessage("Debes completar este campo").bail()  
        .isLength({min: 6}).withMessage("La contraseña debe contener 6 caracteres") ,

]