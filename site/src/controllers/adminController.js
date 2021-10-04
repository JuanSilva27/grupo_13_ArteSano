const fs= require("fs")
const path= require ("path")

const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos=JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))
const categorias=require("../data/categorias.json")

module.exports={
    list:function(req, res, next) {
        res.render('admin/admin',{productos});
      },
    create:function(req, res, next) {
        res.render('admin/create',{categorias});
      },
    edit:function(req, res, next) {
        res.render('admin/edit',{categorias});
      }
}
