const relacionados=require("../views/data/relacionados.json")
const categorias=require("../views/data/categorias.json")

module.exports={
    list:function(req, res, next) {
        res.render('admin/admin',{relacionados});
      },
    create:function(req, res, next) {
        res.render('admin/create',{categorias});
      },
    edit:function(req, res, next) {
        res.render('admin/edit',{categorias});
      }
}
