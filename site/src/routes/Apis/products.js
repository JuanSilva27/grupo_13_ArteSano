var express = require('express');
var router = express.Router();

const {productosFiltrados}= require("../../controllers/api/filterApi")
const {productosOrdenados}= require("../../controllers/api/orderApi")

router.get("/",productosFiltrados)
router.get("/orden",productosOrdenados)
module.exports = router