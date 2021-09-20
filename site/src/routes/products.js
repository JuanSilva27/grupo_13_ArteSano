var express = require('express');
var router = express.Router();
const {carrito, products}=require("../controllers/productsController")
/* GET users listing. */
router.get('/carrito', carrito);

router.get('/producto', products);


module.exports=router