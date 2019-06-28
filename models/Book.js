var mongoose = require('mongoose');

const Books = new mongoose.Schema({
    titulo: String,
    autor: String,
    fechaPublicacion: {type: Date, default:Date.now},
    descripcion: String,
    votos: Number
})

module.exports=mongoose.model('Books',Books);