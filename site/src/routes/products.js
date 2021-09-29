var express = require('express');
var router = express.Router();
const {carrito, products}=require("../controllers/productsController")
/* GET users listing. */
router.get('/carrito', carrito);

router.get('/detail', products);


module.exports=router