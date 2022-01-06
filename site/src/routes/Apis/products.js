var express = require('express');
var router = express.Router();

const {productosFiltrados}= require("../../controllers/api/filterApi")

router.get("/",productosFiltrados)
module.exports = router