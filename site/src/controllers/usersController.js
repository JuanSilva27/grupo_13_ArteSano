const fs= require("fs")
const path= require ("path")
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator")
const UsersFilePath = path.join(__dirname, '../data/usuarios.json');
let usuarios=JSON.parse(fs.readFileSync(UsersFilePath, "utf-8"))
const db = require('../database/models')





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
        db.Usuarios.create({
          nombre: object.Nombre,
          apellido: object.Apellido,
          email: object.email,
          password: bcrypt.hashSync(object.password, 10),
          telefono: object.telefono,
          provincia: object.provincia,
          localidad: object.localidad,
          imagen: req.file ? req.file.filename : "userDefault.jpeg",
          id_rol: 1
        })
        .then(resultado => {
          req.session.userLog=resultado
          res.cookie("recuerdame", resultado.email, {maxAge: 60*1000*5})
          res.redirect('/users/Miperfil');
        })
        .catch(err => {
          res.send(err);
        })   
      } 
      else {
        res.render('users/register', {errors: errors.mapped(), old: object});
      }
    },

    user: (req,res)=>{
      const user=req.session.userLog
      db.Usuarios.findOne({
        where: {
          id: user.id
        },
        include: [{association: 'roles'}]
      })
        .then(user => {
          res.render("users/users",{usuario: user})
        })
        .catch(err => {
          res.send(err);
        })
      
    },

    processLogin: (req,res)=>{
      const errors = validationResult(req);
      if (errors.isEmpty()) { 
        db.Usuarios.findOne({
          where: {
            email: req.body.email
          }
        })
        .then (user => {
          if (user && bcrypt.compareSync(req.body.password, user.password)){
            req.session.userLog = user
            if (req.body.recuerdame !== undefined){
              res.cookie("recuerdame", user.email, {maxAge: 60*1000})
            }
            res.redirect("/")
          }
        })
        .catch(err => {
          res.send(err);
        })
      } else {
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
  },

  edit: (req,res) => {
    db.Usuarios.findByPk(req.params.id)
      .then(user => {
        res.render('users/editUser', {usuario:user})
      })
      .catch(err => {
        res.send(err);
      })
  },
  update: (req,res) => {
    let object = (req.body)
    db.Usuarios.update({
        nombre: object.Nombre,
        apellido: object.Apellido,
        email: object.email,
        telefono: object.telefono,
        provincia: object.provincia,
        localidad: object.localidad,
        //imagen: req.file ? req.file.filename : "userDefault.jpeg",
    },{
      where: {
        id: req.params.id
      }
    })
    .then(resultado => {
      res.redirect('/users/Miperfil')
    })
    .catch(err => {
      res.send(err);
    })
    
  }
};
