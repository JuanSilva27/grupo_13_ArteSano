admin.js

var express = require('express');
var router = express.Router();
const {list, create, edit, update, destroy, newProduct}=require("../controllers/adminController")

/* GET users listing. */
router.get('/', list);

router.get('/create', create);
router.post('/create', newProduct);


//editar producto
router.get('/edit/:id', edit);
router.put("/edit/:id",update)

//borrar producto
router.delete("/delete/:id",destroy)

//ESTO ESTA DE GUIA PERO EN TEORIA NO CAMBIARIAN LAS DE ARRIBA
router.get('/', controller.add)
router.post('/', controller.create)

router.get('/edit/:id', edit);
router.put("/edit/:id",update)

router.delete("/delete/:id",destroy)
router.post('/', controller.create)

router.get('/', controller.add)
router.post('/', controller.create)

router.get('/', controller.add)
router.post('/', controller.create)
module.exports=router