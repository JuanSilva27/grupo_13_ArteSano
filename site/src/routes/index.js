var express = require('express');
var router = express.Router();
const {index, about,search }=require("../controllers/indexController")


/* GET home page. */
router.get('/', index );

router.get('/search', search );

router.get("/about",about)



module.exports = router;
