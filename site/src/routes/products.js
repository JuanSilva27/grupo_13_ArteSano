var express = require('express');
var router = express.Router();
const {carrito, products}=require("../controllers/productsController")
/* GET users listing. */
router.get('/carrito', function(req, res, next) {
  res.render('carrito',carrito);
});

router.get('/producto', function(req, res, next) {
  res.render('products',products);
});


module.exports=router