const fs= require("fs")
const path= require ("path")

const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos=JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))

const categorias=require("../data/categorias.json")
const favoritos=require("../data/favoritos.json")

module.exports={
    index:function(req, res, next) {
        res.render('home/home',{categorias,productos});
      },

    about:(req,res,next)=>{
      res.render("home/aboutus")
    }
}