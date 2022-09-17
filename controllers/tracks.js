const {tracksModel} = require('../models')

/*Obtener lista de items*/
const getItems = async (req, res) =>{
const data = await tracksModel.find({})
    res.send({data})
};

/*Obtener un item*/

const getItem = (req, res) =>{};

/*Crear un item*/

const createItem = async (req, res) =>{
    const {body} = req;  //se usa destructuración en vez de const body = req.body
   const data = await tracksModel.create(body);
    console.log(body);
    res.send({data})
};

/*Actualizar un item*/

const updateItem = (req, res) =>{};

/*Borrar un item*/

const deleteItem = (req, res) =>{};




module.exports = {getItems, getItem, createItem, updateItem, deleteItem}