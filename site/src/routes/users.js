var express = require('express');
var router = express.Router();
const multer = require("multer");
const path = require("path");
/* const {check} = require("express-validator") */
const {login,register, NewRegister, user, processLogin, check, logout, edit, update}=require("../controllers/usersController")
const validation = require("../middlewares/validate")
const guestUser = require('../middlewares/guestUser')
const authUser = require('../middlewares/authUser')
const upload = require('../middlewares/multer.js')

router.get('/login', guestUser, login);
router.post('/login',processLogin)


/* Register */
router.get('/register', guestUser, register);
router.post('/register',upload.single("image"),validation,  NewRegister);


/* User */
router.get("/Miperfil", authUser, user)

/*Editar perfil*/
router.get('/edit/:id',authUser, edit);
router.put("/Miperfil/edit",upload.single("image"), update)

/* check */
router.get("/check",check)

// Cerrar sesión
router.get('/logout', logout)

module.exports = router;

