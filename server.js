const express = require('express');
const config = require('./config');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


//Para configurar el puerto del servidor debe modificar el archivo config.js
app.listen(config.port, () => {
    mongoose.connect(config.db.url, { useNewUrlParser: true }
    )
    console.log(`Escuchando al puerto ${config.port}!`)
})


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Coneccion a MongoDB establecida')
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

const api = require('./routes/api')

// Aqui podra modificar las rutas de la api
app.use('/api', api) 


module.exports = app

