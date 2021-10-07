var express = require('express');
var router = express.Router();
const {carrito, products, detail}=require("../controllers/productsController")
/* GET users listing. */
router.get('/carrito', carrito);

router.get('/detail', products);

router.get('/detail/:id', detail);

router.get('/products', products);

module.exports=router