const mongoose = require('mongoose');

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String
        },
        
    },
    {
        timestamps:true, //createAt, updateAt
        versionKey:false
    }
);

module.exports = mongoose.model("storages", StorageScheme) //primer parametro de model se refiere al nombre de la coleccion/tabla