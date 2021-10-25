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
      let object = (req.body)
      if (errors.isEmpty()) { 
        
        let NuevoUsuario = {
          id: usuarios.length+1,
          firstName: object.Nombre,
          phone: object.telefono,
          provincia: object.provincia,
          localidad: object.localidad,
          email: object.email,
          password: bcrypt.hashSync(object.password, 10),
          password2: bcrypt.hashSync(object.password2, 10),
          Imagen: object.image
        }
      usuarios.push(NuevoUsuario);
      fs.writeFileSync(UsersFilePath,JSON.stringify(usuarios, null,2));
      res.redirect(`/users/perfil/${NuevoUsuario.id}`); }
      else {
        res.render('users/register', {errors: errors.mapped(), old: object});
      }
      
    },

    user: (req,res)=>{
      const id= req.params.id
      const usuario = usuarios.find(a=>a.id === +id)
      res.render("users/users",{usuario})
    },

    processLogin: (req,res)=>{
      const userToLogin= usuarios.find(usuario=> usuario.email === req.body.email)
    
    if (userToLogin && bcrypt.compareSync(req.body.password, userToLogin.password)){
      req.session.userLog = userToLogin
      if (req.body.recuerdame !== undefined){
        res.cookie("recuerdame", userToLogin.email, {maxAge: 60*1000})
      }
      res.redirect("/users/check")
    }
    else{
      res.render("users/login",{errors:{msg: "Email o contraseña incorrecta"}})
    }
  },

  check: (req,res)=>{

    if(req.session.userLog !== undefined){
      res.send(`El usuario logueado es ${req.session.userLog.email}`)
    }
    else{
      res.send("Usuario no logueado")
    }

  }
};
