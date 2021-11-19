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
     db.Usuario.Create(req.body)
    .then( result => {
      res.cookie("recuerdame", result.email, {maxAge: 60*1000})
      res.redirect(`/users/Miperfil`);
      else {
        res.render('users/register', {errors: errors.mapped(), old: req.body});
      }
    })
    .catch(
      (err) => {
        res.send(err)
    }) 

        let NuevoUsuario = {
          id: usuarios.length+1,
          firstName: object.Nombre,
          lastName: object.Apellido,
          phone: object.telefono,
          provincia: object.provincia,
          localidad: object.localidad,
          email: object.email,
          password: bcrypt.hashSync(object.password, 10),
          imagen: req.file ? req.file.filename : "userDefault.jpeg"
        }
      usuarios.push(NuevoUsuario);
      
      fs.writeFileSync(UsersFilePath,JSON.stringify(usuarios, null,2));
      req.session.userLog=NuevoUsuario
      res.cookie("recuerdame", NuevoUsuario.email, {maxAge: 60*1000})
      res.redirect(`/users/Miperfil`);
    }
      else {
        
        res.render('users/register', {errors: errors.mapped(), old: object});
      }
      
    },

    //Falta ruta
    edite: (req, res) => {
      res.render('/users/Miperfil')
    },
    update: (req, res) => {
      db.Usuario.update(
        req.body,
        { 
         where{id: req.params.id}
        })
      .then( result => {
        res.redirect('/users/Miperfil')
      })
      .catch(
        (err) => {
          res.send(err)
      })
    user: (req,res)=>{
      const user=req.session.userLog
      const usuario = usuarios.find(a=>a.id === user.id)
      res.render("users/users",{usuario})
    },

    processLogin: (req,res)=>{
      const userToLogin= usuarios.find(usuario=> usuario.email.toLowerCase() === req.body.email.toLowerCase())
      
    if (userToLogin && bcrypt.compareSync(req.body.password, userToLogin.password)){
      req.session.userLog = userToLogin
      if (req.body.recuerdame !== undefined){
        res.cookie("recuerdame", userToLogin.email, {maxAge: 60*1000})
      }
      res.redirect("/")
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

  },
  logout: (req,res) => {
    req.session.destroy()
    if (req.cookies.recuerdame !== undefined) {
      res.cookie('recuerdame', '', {maxAge: -1})
    }
    res.redirect('/')
  }
};