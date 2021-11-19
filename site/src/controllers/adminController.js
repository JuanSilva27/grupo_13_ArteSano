const fs= require("fs")
const path= require ("path")

const productsFilePath = path.join(__dirname, '../data/productos.json');
let productos=JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))
const categorias=require("../data/categorias.json");
const db = require("../database/models");
/* const { products } = require("./productsController"); */

module.exports={
    list:function(req, res, next) {
      db.Productos.findAll({
        include: [
          {association: "categoriasPr"},
          {association: "productosIm"}
        ]
      })
      .then(productos=>{
        res.render('admin/admin',{productos})
      })
      
      },

      ////crear
    create:function(req, res, next) {
      db.Categorias.findAll({
        include:[{association:"categoriasPr"}]
      })
      .then(categorias=>{
        
        res.render('admin/create',{categorias});
      })
      }
      ,

      newProduct: (req, res, next) => {
        db.Productos.create({
          nombre:req.body.titulo,
          descripcion:req.body.descripcion,
          precio:req.body.precio,
          id_categoria:req.body.categoria,
        })
        .then(resultado=>{
          db.Imagen.create({
            id_producto:resultado.id,
            nombre:"",
          })
          res.redirect(`/products/detail/${resultado.id}`)
        })
      },

      //edit
    edit:function(req, res, next) {
        const{id}=req.params
        let productEdit = db.Productos.findByPk(id);
        let categorias = db.Categorias.findAll();

        Promise.all([productEdit, categorias])
        .then(([productEdit,categorias])=>{

          res.render('admin/edit',{productEdit, categorias});

        })

      },

      update: (req,res,next)=>{
        db.Productos.update({
          nombre:req.body.titulo,
          descripcion:req.body.descripcion,
          precio:req.body.precio,
          id_categoria:req.body.categoria,
        },{
          where: {id: req.params.id}
        })
        .then(resultado=>{
          res.redirect(`/products/detail/${+req.params.id}`)
        })


      },

      //borrar
      destroy: (req,res, next)=>{
        productos=productos.filter(product=> product.id !== +req.params.id)
        fs.writeFileSync(productsFilePath,JSON.stringify(productos, null,2))
        res.redirect("/admin")
      }
      
    
}
