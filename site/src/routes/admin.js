var express = require('express');
var router = express.Router();
const {list, create, edit, update, destroy, newProduct}=require("../controllers/adminController")
const adminValidate = require("../middlewares/adminValidate")
const productValidate = require("../middlewares/productValidate")
const upload = require('../middlewares/multerProducts')
/* GET users listing. */
router.get('/', adminValidate, list);

router.get('/create', adminValidate, create);
router.post('/create', adminValidate, upload.single("image"), productValidate, newProduct);


//editar producto
router.get("/edit/:id", adminValidate, edit);
router.put("/edit/:id", adminValidate, upload.single("image"), productValidate, update)

//borrar producto
router.delete("/delete/:id", adminValidate,destroy)


module.exports=router