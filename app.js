require('dotenv').config()
const express = require('express'); //declaración para levantar el servicio web
const cors = require('cors'); //permite evitar el error de origen cruzado en navegadores
const dbConnect = require('./config/mongo')
const app = express();

app.use(cors());

const port = process.env.PORT || 3000; //constante de puerto //si existe la variable de entorno corre en el puerto predeterminado, si no corre en el puerto 3000


app.listen(port, ()=>{ //aplicacion escucha por el puerto enviado y responde con el console.log
    console.log('Tu app esta lista por http://localhost:' + port);
})

dbConnect();