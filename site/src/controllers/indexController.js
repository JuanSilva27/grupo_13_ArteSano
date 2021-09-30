const categorias=require("../data/categorias.json")
const favoritos=require("../data/favoritos.json")
const productos=require("../data/productos.json")
module.exports={
    index:function(req, res, next) {
        res.render('home/home',{categorias,productos});
      }
}