
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator")
const db = require('../database/models')





module.exports={
    login:function(req, res, ) {
        res.render('users/login');
      },

    register:function(req, res, ) {
        res.render('users/register');
      },
<<<<<<< HEAD
    NewRegister: (req, res, ) => {  
=======

    NewRegister: (req, res, ) => {
>>>>>>> develop
      const errors = validationResult(req);
      if (req.fileValidationError) {
        let image = {
            param : 'image',
            msg: req.fileValidationError,
        }
        errors.errors.push(image)
    }
      let object = (req.body)
      if (errors.isEmpty()) { 
<<<<<<< HEAD
    /*     db.Usuario.Create(req.body)
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
    }) */
        let NuevoUsuario = {
          id: usuarios.length+1,
          firstName: object.Nombre,
          lastName: object.Apellido,
          phone: object.telefono,
          provincia: object.provincia,
          localidad: object.localidad,
=======
        db.Usuarios.create({
          nombre: object.Nombre,
          apellido: object.Apellido,
>>>>>>> develop
          email: object.email,
          password: bcrypt.hashSync(object.password, 10),
          telefono: object.telefono,
          provincia: object.provincia,
          localidad: object.localidad,
          imagen: req.file ? req.file.filename : "userDefault.jpeg",
          id_rol: 1
        })
        .then(resultado => {
          let user = {
            id: resultado.id,
              nombre: resultado.nombre,
              apellido: resultado.apellido,
              email: resultado.email,
              id_rol: resultado.id_rol,
              imagen: resultado.imagen
          }
          req.session.userLog=user
          res.cookie("recuerdame", user, {maxAge: 60*1000*5})
          res.redirect('/users/Miperfil');
        })
        .catch(err => {
          res.send(err);
        })   
      } 
      else {
<<<<<<< HEAD
        
=======
>>>>>>> develop
        res.render('users/register', {errors: errors.mapped(), old: object});
      }
    },
    //Falta ruta
    /* edite: (req, res) => {
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
      }) */
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
            req.session.userLog = {
              id: user.id,
              nombre: user.nombre,
              apellido: user.apellido,
              email: user.email,
              id_rol: user.id_rol,
              imagen: user.imagen
            }
            if (req.body.recuerdame !== undefined){
              res.cookie("recuerdame", req.session.userLog, {maxAge: 60*1000*10})
            }
            res.redirect("/")
          } else{
            res.render("users/login",{errors:{msg: "Contraseña incorrecta"}})
          }
        })
        .catch(err => {
          res.send(err);
        })
      } else {
        res.render('users/login', {errors: errors.mapped()});
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
    const user=req.session.userLog
    db.Usuarios.findByPk(user.id)
      .then(user => {
        res.render('users/editUser', {usuario:user})
      })
      .catch(err => {
        res.send(err);
      })
  },
  update: (req,res) => {
    const user=req.session.userLog
    let object = (req.body)
    db.Usuarios.update({
        nombre: object.Nombre,
        apellido: object.Apellido,
        email: object.email,
        telefono: object.telefono,
        provincia: object.provincia,
        localidad: object.localidad,
       imagen: req.file ? req.file.filename : user.imagen
    },{
      where: {
        id: user.id
      }
    })
    .then(resultado => {
      db.Usuarios.findByPk(user.id)
      .then(usuario=>{
        user.imagen= usuario.imagen
        res.redirect('/users/Miperfil')
      })
      
    })
    .catch(err => {
      res.send(err);
    })
    
  }
};
