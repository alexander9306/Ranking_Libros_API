'use strict'
 
module.exports = {
    name: 'Modelo rest-api UNPHU',
    URL:process.env.BASE_URL || 'http://localhost',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 5000, // Puerto utilizado
    mongodb_uri: process.env.MONGODB_URI || '',
	db: { 					
		url: 'mongodb://localhost/booksRankingdb', // Aqui se modifica la coneccion con la base de datos. 
		type: 'mongo'
		}
}