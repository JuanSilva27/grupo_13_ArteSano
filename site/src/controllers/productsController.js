const fs= require("fs")
const path= require ("path")

const productsFilePath = path.join(__dirname, '../data/productos.json');
let productos=JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const categorias= require('../data/categorias.json');
const db = require('../database/models')


module.exports = {
    carrito: function(req, res, next) {
        res.render('products/carrito',{productos});
      },
  
    store: function(req, res, next) {
      res.render('products/products', {productos})
    }, 
      
    detail: (req, res)=>{
      productos=JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))
      const id= req.params.id
      const producto= productos.find(element=>element.id=== +id)
      res.render('products/detalle',{producto, productos})
    },

    categoria: (req,res)=>{
      let categoria= req.params.categoria
      let selecCategoria= categorias.find(e=>e.href=== categoria)
      res.render('products/categorias',{selecCategoria, productos})
    },

    categoriasCompletas: (req, res) => {
      res.render('products/categorias/completas', {categorias, productos})
    }
}

