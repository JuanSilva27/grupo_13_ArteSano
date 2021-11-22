const fs= require("fs")
const path= require ("path")

const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos=JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))
const categorias=require("../data/categorias.json")
const db = require('../database/models')


module.exports={
    index:function(req, res, next) {
      let productos = db.Productos.findAll({include:["productosIm"],limit:4})
      let categorias = db.Categorias.findAll()
      Promise.all([productos,categorias])
      .then(([productos,categorias])=>{
        
        res.render('home/home',{categorias,productos});
      })
      .catch(err=>{
        res.send(err)
      })
      },

    about:(req,res,next)=>{
      res.render("home/aboutus")
    }

    

}