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


module.exports=router