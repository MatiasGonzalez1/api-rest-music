const express = require('express');
const fs = require('fs');
const router = express.Router(); //funcion de express para manejar rutas

const PATH_ROUTES = __dirname;

const removeExt = (fileName)=>{
    return fileName.split('.').shift()
}
fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeExt(file) // remueve la extención del archivo users, storage, tracks
    if(name !== 'index'){
        router.use(`/${name}`, require(`./${file}`)) //concatena la ruta con el nombre extraido http://localhost/api + name
    }
})

module.exports = router;