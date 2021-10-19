var express = require('express');
var router = express.Router();
const {carrito, products, detail, categoria}=require("../controllers/productsController")
/* GET users listing. */

/// carrito
router.get('/carrito', carrito);


///todos los productos
router.get('/detail', products);

//detalle de product
router.get('/detail/:id', detail);

///categotias
router.get("/:categoria",categoria)
router.get('/products', products);

module.exports=router