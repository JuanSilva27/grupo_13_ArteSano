const relacionados=require("../views/data/relacionados.json")

module.exports={
    carrito:function(req, res, next) {
        res.render('products/carrito',{relacionados});
      },
    products:function(req, res, next) {
        res.render('products/products',{relacionados});
      }
}

