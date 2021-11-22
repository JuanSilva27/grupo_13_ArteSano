var express = require('express');
var router = express.Router();
const {index, about, prueba, prueba2}=require("../controllers/indexController")


/* GET home page. */
router.get('/', index );


router.get("/about",about)



module.exports = router;
