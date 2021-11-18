const multer = require("multer");
const path = require("path");



 
    const storage = multer.diskStorage({
        destination: function ( req, file, cb){
            cb(null, path.join(__dirname, "/../../public/img/users"))
        
    },
         filename: function (req, file, cb) {
            cb(null, "img" + Date.now() + path.extname(file.originalname))}
        } )
           let upload = multer({storage});
           module.exports  = upload


