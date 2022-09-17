const express = require('express');
const router = express.Router(); //funcion de express para manejar rutas
const {getItems, createItem} = require('../controllers/tracks')

//TODO http://localhost/tracks

router.get('/', getItems)
router.post('/', createItem)


module.exports = router;
