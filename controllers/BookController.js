const Book = require('../models/Book')


module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {
            Book.find(params)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    getById: (id) => {
        return new Promise((resolve, reject) => {
            Book.findById(id)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(new Error('Libro ' + id + ' no encontrado'))
                })
        })
    },

    getSortByDate: () => {
        return new Promise((resolve, reject) => {
            Book.find().sort({ fechaPublicacion: -1 })
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    post: (params) => {
        return new Promise((resolve, reject) => {
            Book.create(params)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(new Error('Hubo un problema con la creacion del libro'))
                })
        })
    },

    put: (id, params) => {
        return new Promise((resolve, reject) => {

            if (params.hasOwnProperty('votos')) {
                Object.entries(params).forEach(entry => {
                    let key = entry[0];
                    let value = entry[1];
                    if (key == 'votos') {
                        if (value > 1 || value < -1) {
                            reject(new Error('Lo siento solo se puede valorar con 1 y -1'))
                        }
                        else {
                            Book.findById(id)
                                .then(datos => {
                                    let value2 = parseInt(datos.votos)
                                    value2 += parseInt(value);
                                    console.log('value 1 + 2  ' + value2)
                                    params.votos = value2
                                    Book.findByIdAndUpdate(id, params, { new: true })
                                        .then(data => {
                                            resolve(data)
                                        })
                                        .catch(err => {
                                            reject(err)
                                        })
                                })
                        }
                    }
                })
            }
            else {
                Book.findByIdAndUpdate(id, params, { new: true })
                    .then(data => {
                        resolve(data)
                    })
                    .catch(err => {
                        reject(err)
                    })
            }
        })
    },

    delete: (id) => {
        return new Promise((resolve, reject) => {
            Book.findByIdAndDelete(id)
                .then(data => {
                    resolve({ id: id })
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}