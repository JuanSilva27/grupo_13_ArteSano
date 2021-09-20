const categorias=require("../views/data/categorias.json")
const favoritos=require("../views/data/favoritos.json")
module.exports={
    index:function(req, res, next) {
        res.render('home',{categorias,favoritos});
      }
}