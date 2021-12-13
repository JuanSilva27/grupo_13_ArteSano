const {check} = require("express-validator")
module.exports=[
    check("email")
        .notEmpty().withMessage("Debes completar este campo").bail()
        .isEmail().withMessage("Tienes que completar el campo con un Email valido"),
    check("password")
        .notEmpty().withMessage("Debes completar este campo").bail()
        .isLength({min: 8}).withMessage("La contraseña debe contener 8 caracteres como mínimo") ,
]