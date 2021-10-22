const fs= require("fs")
const path= require ("path")

const usuariosFilePath = path.join(__dirname, '../data/usuarios.json');
const usuarios=JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"))

module.exports={
    login:function(req, res, next) {
        res.render('users/login');
      },
    register:function(req, res, next) {
        res.render('users/register');
      },
      usuarios: (req, res, next) => {
        res.render('users/users', {usuarios})
      } 
}