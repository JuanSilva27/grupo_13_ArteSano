const relacionados=require("../views/data/relacionados.json")

module.exports={
    carrito:function(req, res, next) {
        res.render('carrito',{relacionados});
      },
    products:function(req, res, next) {
        res.render('products',{relacionados});
      }
}

