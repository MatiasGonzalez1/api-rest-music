const {storageModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL;

/*Obtener lista de items*/
const getItems = async (req, res) =>{
const data = await storageModel.find({})
    res.send({data})
};

/*Obtener un item*/

const getItem = (req, res) =>{};

/*Crear un item*/

const createItem = async (req, res) =>{
    const {body, file} = req;  //se usa destructuración en vez de const body = req.body
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
   const data = await storageModel.create(body);
    res.send({data})
};

/*Actualizar un item*/

const updateItem = (req, res) =>{};

/*Borrar un item*/

const deleteItem = (req, res) =>{};




module.exports = {getItems, getItem, createItem, updateItem, deleteItem}