const fs = require("fs")
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/productos.json');
let productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))
let categorias = require("../data/categorias.json");
const db = require("../database/models");
/* const { products } = require("./productsController"); */
const { validationResult } = require("express-validator")

module.exports = {
  list: function (req, res, next) {
    db.Productos.findAll({
      include: [
        { association: "categoriasPr" },
        { association: "productosIm" }
      ]
    })
      .then(productos => {
        res.render('admin/admin', { productos })
      })
      .catch((error) => {
        res.send(error)
      })

  },

  ////crear
  create: function (req, res, next) {
    db.Categorias.findAll({
      include: [{ association: "categoriasPr" }]
    })
      .then(categorias => {

        res.render('admin/create', { categorias });
      })
      .catch((error) => {
        res.send(error)
      })
  }
  ,

  newProduct: (req, res) => {

    const errors = validationResult(req);
    let object = (req.body)
    if (errors.isEmpty()) {

      db.Productos.create({
        nombre: object.titulo,
        descripcion: object.descripcion,
        precio: object.precio,
        id_categoria: object.categoria,
      })
   
      .then(resultado => {
      db.Imagen.create({
        id_producto: resultado.id,
        nombre: req.file ? req.file.filename : "userDefault.jpeg",
      })
      res.redirect(`/products/detail/${resultado.id}`)
    })
    .catch((error) => {
      res.send(error)
    })
} else {
res.render('admin/create', {errors: errors.mapped(), old: object})
}},

  //edit
  edit: function (req, res, next) {
    const { id } = req.params
    let productEdit = db.Productos.findByPk(id, { include: [{ association: "productosIm" }] });
    let categorias = db.Categorias.findAll();

    Promise.all([productEdit, categorias])
      .then(([productEdit, categorias]) => {

        res.render('admin/edit', { productEdit, categorias });

      })
      .catch((error) => {
        res.send(error)
      })

  },

update: (req, res, next) => {
  db.Productos.update({
    nombre: req.body.titulo,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    id_categoria: req.body.categoria,
  }, {
    include: [{ association: "productosIm" }],
    where: { id: req.params.id }
  })
    .then(resultado => {
      db.Imagen.update({
        nombre: req.file ? req.file.filename : req.body.imageName
      }, {
        where: { id_producto: req.params.id }
      })
      res.redirect(`/products/detail/${+req.params.id}`)
    })
    .catch((error) => {
      res.send(error)
    })


},

  //borrar
  destroy: (req, res, next) => {

    db.Imagen.destroy({
      where: {
        id_producto: req.params.id
      }
    })
      .then(result => {
        db.Productos.destroy({
          where: {
            id: req.params.id
          }
        })
        return res.redirect("/")
      })
      .catch((error) => {
        res.send(error)
      })
  }
}