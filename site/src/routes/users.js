var express = require('express');
var router = express.Router();
const multer = require("multer");
const path = require("path");
/* const {check} = require("express-validator") */
const {login,register, NewRegister, user, processLogin, check}=require("../controllers/usersController")
const validation = require("../middlewares/validate")

/* const validation = [
    check("Nombre").notEmpty().withMessage("Debes completar este campo"),
    check("telefono").notEmpty().withMessage("Debes completar este campo"),
    check("provincia").notEmpty().withMessage("Debes completar este campo"),
    check("localidad").notEmpty().withMessage("Debes completar este campo"),
    check("email").isEmail().withMessage("Tienes que completar el campo con un Email valido"),
    check("password").notEmpty().withMessage("Debes completar este campo").bail()
    .isLength({min: 6}).withMessage("La contraseña debe contener 6 caracteres") ,
    check("password2").notEmpty().withMessage("Debes completar este campo").bail()  
    .isLength({min: 6}).withMessage("La contraseña debe contener 6 caracteres") ,
]; */
/* Login */
router.get('/login', login);
router.post("/login",processLogin)

const storage = multer.diskStorage({
    destination: function ( req, file, cb){
        cb(null, path.join(__dirname, "/../../public/img"))
    
},
     filename: function (req, file, cb) {
        cb(null, "img" + Date.now() + path.extname(file.originalname))}
    } )
    let upload = multer({storage});

/* Register */
router.get('/register', register);
router.post('/register', upload.single("image"), validation,  NewRegister);

/* User */
router.get("/perfil/:id",user)

/* check */
router.get("/check",check)

module.exports = router;

