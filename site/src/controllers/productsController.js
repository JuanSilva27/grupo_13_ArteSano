const relacionados=require("../data/relacionados.json")
const productos=require("../data/productos.json")

module.exports={
    carrito:function(req, res, next) {
        res.render('products/carrito',{productos,relacionados});
      },
    products:function(req, res, next) {
        res.render('products/detalle',{productos,relacionados});
      },
    
    detail:(req, res)=>{
      const id= req.params.id
      const producto= productos.find(element=>element.id=== +id)
      res.render("products/detalle",{producto,productos, relacionados})
    }
}

