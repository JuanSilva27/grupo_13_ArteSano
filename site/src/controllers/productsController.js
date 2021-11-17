const fs= require("fs")
const path= require ("path")

const productsFilePath = path.join(__dirname, '../data/productos.json');
let productos=JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const categorias= require('../data/categorias.json');


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
    },
    // crear rutas hacia el controlador y en el controlador los metodos que renderisen la vista. La vista que envie la informacion por POST para crear editar o eliminar 
/* add: (req, res) => {
   res.render('admin/create',{categorias});
  },

  create: (req, res) => {
    db.Product.Create(req.body)
    .then( result => {
      res.redirect(`/products/detail/${req.body.id}`)
    })
    .catch(
      (err) => {
        res.send(err)
    })
  },
  edite: (req, res) => {
    res.render(''admin/edit'', {categorias, productos})
  },
  update: (req, res) => {
    db.Product.update({ 
       where{id: req.params.id}
    })
    .then( result => {
      res.redirect(`/products/detail/${req.body.id}`)
    })
    .catch(
      (err) => {
        res.send(err)
    })
  },
  destroy: (req, res) => {
    db.product.destroy({ 
       where{id: req.params.id}
    })
    .then(
      results => {
        res.redirect("/products")
    })
    .catch(
      (err) => {
        res.send(err)
    })
    res.render("/admin", {categorias, productos})
  }, 
  
  list: (req, res) => {
    res.render('products/categorias/completas', {categorias, productos})
  },

  buscar: (req, res) => {
    res.render('products/categorias/completas', {categorias, productos})
  },

  detail: (req, res) => {
    res.render('products/categorias/completas', {categorias, productos})
  } */
}

