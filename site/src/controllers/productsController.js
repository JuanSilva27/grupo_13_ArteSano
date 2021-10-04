const fs= require("fs")
const path= require ("path")

const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos=JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))

const relacionados=require("../data/relacionados.json")


module.exports={
    carrito:function(req, res, next) {
        res.render('products/carrito',{productos,relacionados});
      },
    products:function(req, res, next) {
        res.render('products/detalle',{productos,});
      },
    
    detail:(req, res)=>{
      const id= req.params.id
      const producto= productos.find(element=>element.id=== +id)
      res.render("products/detalle",{producto,productos,})
    }
}

