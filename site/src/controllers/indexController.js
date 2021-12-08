const fs= require("fs")
const path= require ("path")

const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos=JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))
const categorias=require("../data/categorias.json")
const db = require('../database/models')


module.exports={
    index:function(req, res, next) {
        res.render('home/home',{categorias,productos});
      },

    about:(req,res,next)=>{
      res.render("home/aboutus")
    },

    prueba: function(req, res, next) {
      const {id}=req.params
      db.Productos.findByPk(+id,
        {
        include: [
          {association: "categoriasPr"},
          {association: "productosIm"}
        ]
      }
      )
        .then(products => {
          res.render('products/prueba', { producto: products })
          
        })
        .catch(err => {
          res.send(err);
        })
    },
    
    prueba2: function(req, res, next) {
      db.Usuarios.findAll(
        {
        include: [{association: "roles"}]
      }
      )
        .then(users => {
          res.render('prueba2', { usuarios: users })
          
        })
        .catch(err => {
          res.send(err);
        })
    },

}