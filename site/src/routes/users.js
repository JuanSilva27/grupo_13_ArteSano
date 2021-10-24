var express = require('express');
var router = express.Router();
const multer = require("multer");
const path = require("path");
const {check} = require("express-validator")
const {login,register, NewRegister}=require("../controllers/usersController")

const validation = [
    check("Nombre").notEmpty().withMessage("Debes completar este campo"),
    check("telefono").notEmpty().withMessage("Debes completar este campo"),
    check("provincia").notEmpty().withMessage("Debes completar este campo"),
    check("localidad").notEmpty().withMessage("Debes completar este campo"),
    check("email").isEmail().withMessage("Tienes que completar el campo con un Email valido"),
    check("password").notEmpty().withMessage("Debes completar este campo").bail()
    .isLength({min: 6}).withMessage("La contraseña debe contener 6 caracteres") ,
    check("password2").notEmpty().withMessage("Debes completar este campo").bail()  
    .isLength({min: 6}).withMessage("La contraseña debe contener 6 caracteres") ,
];
/* GET users listing. */
router.get('/login', login);

const storage = multer.diskStorage({
    destination: function ( req, file, cb){
        cb(null, path.join(__dirname, "/../../public/img"))
    
},
     filename: function (req, file, cb) {
        cb(null, "img" + Date.now() + path.extname(file.originalname))}
    } )
    let upload = multer({storage});


router.get('/register', register);
router.post('/register', upload.single("image"), validation,  NewRegister);



module.exports = router;

/* const express= require("express")
const app= express()
const port= 3030
const path= require("path")

app.use(express.static('public'))
app.set("view engine", "ejs");


app.get("/carrito", (req,res)=> {res.sendFile(path.join(__dirname,"views","carrito.html"))})
app.get("/", (req,res)=> {res.sendFile(path.join(__dirname,"views","home.html"))})
app.get("/producto", (req,res)=> {res.sendFile(path.join(__dirname,"views","producto.html"))})
app.get("/register", (req,res)=> {res.sendFile(path.join(__dirname,"views","register.html"))})
app.get("/login", (req,res)=> {res.sendFile(path.join(__dirname,"views","login.html"))})

app.listen(port, ()=> console.log("se levanto server en el puerto " +port)) */
