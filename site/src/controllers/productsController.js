const fs= require("fs")
const path= require ("path")

const productsFilePath = path.join(__dirname, '../data/productos.json');
let productos=JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const categorias= require('../data/categorias.json');
const db = require('../database/models')

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

module.exports = {
    carrito: function(req, res, next) {
     let productos= db.Productos.findAll({
        include: [
          {association: "categoriasPr"},
          {association: "productosIm"}
        ]
      })
      let relacionados= db.Productos.findAll({
        include: [
          {association: "categoriasPr"},
          {association: "productosIm"}
        ],
        limit: 6
      })
      Promise.all([productos,relacionados])
      .then(([productos, relacionados])=>{
        res.render('products/carrito',{productos, relacionados});


      }

      )},
  
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
          res.render('products/products', { productos: products })
          
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
      let {categoria}= req.params
      let selecCategoria=db.Categorias.findOne({
        where:{
          href: categoria
        }, 
        include: [{association: "categoriasPr"}]
      });
      let productos=db.Productos.findAll({
        include:[{association: "categoriasPr"}, {association:"productosIm"}]
      });
      Promise.all([selecCategoria,productos])
      .then(([selecCategoria,productos])=>{

        res.render('products/categorias',{selecCategoria, productos})
      })
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
  }} */