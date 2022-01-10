var express = require('express');
const { buscar } = require('../../controllers/api/buscadorApi');
var router = express.Router();

const {productosFiltrados}= require("../../controllers/api/filterApi")

router.get("/",productosFiltrados)
router.get("/search",buscar)
module.exports = router