var express = require('express')
var router = express.Router()
const controllers = require('../controllers')

//ENDPOINTS

//Get: api/libros
router.get('/:resource', (req, res) => {
    const resource = req.params.resource
    const controller = controllers[resource]
    const filters = req.query // query para filtrar los datos 

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource'
        })
        return
    }
    controller.get(filters)
        .then(data => {
            res.json({
                confirmation: 'success',
                data: data
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
        })
})


//Para obtener los datos por el ID de la coleccion
router.get('/:resource/:id', (req, res) => {
    const resource = req.params.resource
    const id = req.params.id

    const controller = controllers[resource]

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource'
        })
        return
    }   //Get: api/libros/ultimos
    if (id == 'ultimos') { 
        controller.getSortByDate()
            .then(data => {
                res.json({
                    confirmation: 'success',
                    data: data
                })
            })
            .catch(err => {
                res.json({
                    confirmation: 'fail',
                    message: err.message
                })

            })
        return
    }
    controller.getById(id)
        .then(data => {
            res.json({
                confirmation: 'success',
                data: data
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
        })
})


router.post('/:resource', (req, res) => {
    const resource = req.params.resource
    const controller = controllers[resource]

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource'
        })
        return
    }
    controller.post(req.body)
        .then(data => {
            res.json({
                confirmation: 'success',
                data: data
            })
        })
        .catch(err => {
            res.json({
                confirmation: ' fail',
                message: err.message
            })
        })
})

router.put('/:resource/:id', (req, res) => {
    const resource = req.params.resource
    const controller = controllers[resource]
    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource'
        })
        return
    }
    controller.put(req.params.id, req.body)
        .then(data => {
            res.json({
                confirmation: 'success',
                data: data
            })
        })
        .catch(err => {
            res.json({
                confirmation: ' fail',
                message: err.message
            })
        })
})

router.delete('/:resource/:id', (req, res) => {
    const resource = req.params.resource
    const controller = controllers[resource]
    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource'
        })
        return
    }
    controller.delete(req.params.id)
        .then(data => {
            res.json({
                confirmation: 'success',
                data: data
            })
        })
        .catch(err => {
            res.json({
                confirmation: ' fail',
                message: err.message
            })
        })
})



module.exports = router;