const fs= require("fs")
const path= require ("path")
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator")
const UsersFilePath = path.join(__dirname, '../data/usuarios.json');
let usuarios=JSON.parse(fs.readFileSync(UsersFilePath, "utf-8"))





module.exports={
    login:function(req, res, ) {
        res.render('users/login');
      },
    register:function(req, res, ) {
        res.render('users/register');
      },
    NewRegister: (req, res, ) => {
      
      
       
      const errors = validationResult(req);
      if (errors.isEmpty()) { 
        let object = (req.body)
        let NuevoUsuario = {
          id: usuarios.length+1,
          nombre: object.Nombre,
          telefono: object.telefono,
          provincia: object.provincia,
          localidad: object.localidad,
          email: object.email,
          password: bcrypt.hashSync(object.password, 10),
          password2: bcrypt.hashSync(object.password2, 10),
          Imagen: object.image
        }
      usuarios.push(NuevoUsuario);
      fs.writeFileSync(UsersFilePath,JSON.stringify(usuarios, null,2));
      res.redirect('/users/login'); }
      else {
        res.render('users/register', {errors: errors.mapped(), old: object});
      }
      
    },
};
