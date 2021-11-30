var express = require('express');
var router = express.Router();
const {list, create, edit, update, destroy, newProduct}=require("../controllers/adminController")
const adminValidate = require("../middlewares/adminValidate")
/* GET users listing. */
router.get('/',adminValidate, list);

router.get('/create',adminValidate, create);
router.post('/create',adminValidate, newProduct);


//editar producto
router.get('/edit/:id',adminValidate, edit);
router.put("/edit/:id",adminValidate,update)

//borrar producto
router.delete("/delete/:id",adminValidate,destroy)


module.exports=router