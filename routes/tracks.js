const express = require('express');
const router = express.Router(); //funcion de express para manejar rutas

//TODO http://localhost/tracks

router.get('/', (req, res)=>{
    const saludo = '¡Hola Mundo!'
    res.send({saludo})
})


module.exports = router;
