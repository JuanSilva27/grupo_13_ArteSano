var express = require('express');
var router = express.Router();
const {index, about, prueba}=require("../controllers/indexController")


/* GET home page. */
router.get('/', index );


router.get("/about",about)

router.get('/prueba', prueba);

module.exports = router;
