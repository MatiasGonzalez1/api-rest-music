const express = require('express');
const router = express.Router(); //funcion de express para manejar rutas
const uploadMiddleware = require('../utils/handleStorage');
const {createItem} = require('../controllers/storage');


router.post('/', uploadMiddleware.single("myfile"), createItem);
module.exports = router;