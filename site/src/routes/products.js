var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/carrito', function(req, res, next) {
  res.render('carrito');
});

router.get('/producto', function(req, res, next) {
  res.render('products');
});


module.exports=router