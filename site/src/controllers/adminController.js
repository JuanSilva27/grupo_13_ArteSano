const fs= require("fs")
const path= require ("path")

const productsFilePath = path.join(__dirname, '../data/productos.json');
let productos=JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))
const categorias=require("../data/categorias.json");
/* const { products } = require("./productsController"); */

module.exports={
    list:function(req, res, next) {
      productos=JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))
        res.render('admin/admin',{productos});
      },
    create:function(req, res, next) {
        res.render('admin/create',{categorias});
      },

      //edit
    edit:function(req, res, next) {
        const{id}=req.params
        const productEdit=productos.find(producto=>producto.id === +id)

        res.render('admin/edit',{productEdit, categorias});
      },

      update: (req,res,next)=>{
        let productToUpdate = productos.find(producto=>producto.id === +req.params.id)
        let {titulo,precio,categoria,descripcion}=req.body
        if(productToUpdate){
          productToUpdate.titulo=titulo
          productToUpdate.descripcion=descripcion
          productToUpdate.precio=precio
          productToUpdate.categoria=categoria

          fs.writeFileSync(productsFilePath,JSON.stringify(productos,null,2))
          res.redirect(`/products/detail/${+req.params.id}`)
        }
        else{
          res.redirect("/")
        }

      },

      //borrar
      destroy: (req,res, next)=>{
        productos=productos.filter(product=> product.id !== +req.params.id)
        fs.writeFileSync(productsFilePath,JSON.stringify(productos, null,2))
        res.redirect("/admin")
      },

      newProduct: (req, res, next) => {
        let object=req.body
        object.id=productos.length+1
        object.favorito = false
        object.relacionados = false
        object.precio = "$" + object.precio
        productos.push(object)
        
        fs.writeFileSync(productsFilePath,JSON.stringify(productos, null,2))
        res.redirect(`/products/detail/${object.id}`)
      },
      
    
}
    // crear rutas, agregar label de apellido y nombre a usuarios, buscar como hacer el buscador y hacer los controllers de usuarios.
/* create: (req, res) => {
   res.render('admin/create');
  },
  newProduct: (req, res) => {
    db.Producto.Create(req.body)
    .then( result => {
      res.redirect(`/products/detail/${result.id}`)
    })
    .catch(
      (err) => {
        res.send(err)
    })
  },
  destroy: (req, res) => {
    db.Producto.destroy({ 
       where{id: req.params.id}
    })
    .then(
      results => {
        res.redirect("/products/products")
    })
    .catch(
      (err) => {
        res.send(err)
    })
  }, 
  list: (req, res) => {
    db.Producto.findAll() 
    .then ( productos => {  
    res.render('/products/products', {productos})
    })
    .catch(
      (err) => {
        res.send(err)
    })
  },
  detail: (req, res) => {
    db.Producto.findByPk(req.params.id) 
    .then ( productos => {  
    res.render('products/detalle', {productos})
    })
    .catch(
      (err) => {
        res.send(err)
    })
  }, 
  edite: (req, res) => {
    res.render('admin/edit')
  },
  update: (req, res) => {
    db.Producto.update(
      req.body,
      { 
       where{id: req.params.id}
      })
    .then( result => {
      res.redirect(`/products/detail/${result.id}`)
    })
    .catch(
      (err) => {
        res.send(err)
    })
  },


falta resolver esto

  buscar: (req, res) => {
    res.render('products/categorias/completas', {categorias, productos})
  }, */