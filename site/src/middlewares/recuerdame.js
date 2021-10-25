const usuarios= require("../data/usuarios.json")

module.exports= (req,res,next)=>{
    if(req.cookies.recuerdame !== undefined && req.session.userLog === undefined){
        req.session.userLog = usuarios.find(usuario=> usuario.mail === req.cookies.recuerdame)
    }
    next()
}