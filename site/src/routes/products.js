var express = require('express');
var router = express.Router();
const {carrito, detail, categoria, store, categoriasCompletas}=require('../controllers/productsController')
/* GET users listing. */

/// carrito
router.get('/carrito', carrito);


///detalle de los productos
router.get('/detail', store);

//detalle de product
router.get('/detail/:id', detail);

///categorias
router.get('/categorias/completas', categoriasCompletas)
router.get('/:categoria', categoria)
router.get('/', store);

module.exports=router