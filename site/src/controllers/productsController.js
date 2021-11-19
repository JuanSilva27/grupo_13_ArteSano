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
      db.Productos.findAll(
        {
        include: [
          {association: "categoriasPr"},
          {association: "productosIm"}
        ]
      }
      )
        .then(products => {
          res.render('products/products', { producto: products })
          
        })
        .catch(err => {
          res.send(err);
        })
    }, 
      
    detail: (req, res)=>{
      const {id}=req.params
      let producto=db.Productos.findByPk(+id,
        {
        include: [
          {association: "categoriasPr"},
          {association: "productosIm"}
        ]
      }
      );
      let relacionados = db.Productos.findAll(
        {
          include: [
            {association: "categoriasPr"},
            {association: "productosIm"}
          ],
          limit: 6
        }
      );
      Promise.all([producto, relacionados])
        .then(([producto, relacionados]) => {
          res.render('products/detalle', { 
            producto: producto,
            relacionados: relacionados })
          
        })
        .catch(err => {
          res.send(err);
        })
    },

    categoria: (req,res)=>{
      let categoria= req.params.categoria
      let selecCategoria= categorias.find(e=>e.href=== categoria)
      res.render('products/categorias',{selecCategoria, productos})
    },

}

